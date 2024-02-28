const { Op } = require('sequelize');

const { lerPor } = require('../repositories/empresaRepository');
const deletarArquivos = require('../utils/deletarArquivos');

/**
 * É utilizada caso de erro na validação, responsavel para lançar o erro na
 * responsa e também apagar os arquivos submetidos ao servidor
 */
class EmpresaRequestInvalida {
  constructor(request, response) {
    this.req = request;
    this.res = response;
  }

  manipular(status, json) {
    if (this.req.files) {
      deletarArquivos(this.req.files.map((f) => f.path));
    }

    return this.res.status(status).json(json);
  }
}

// verifica se o e-mail ou o nome já está em uso
exports.validarEmpresa = async (req, res, next) => {
  const { email, nome } = req.body;
  const { id } = req.params;

  const requestInvalida = new EmpresaRequestInvalida(req, res);

  try {
    if (!email) {
      return requestInvalida.manipular(400, {
        msg: 'O e-mail deve ser informado!',
      });
    }

    if (!nome) {
      return requestInvalida.manipular(400, {
        msg: 'O nome deve ser informado!',
      });
    }

    // Procura o email no banco de dados
    const empresa = await lerPor(
      {
        [Op.or]: [{ email }, { nome }],
      },
      ['email']
    );

    //Se empresa == null o email nao existe, o pipeline continua
    if (!empresa) {
      return next();
    }

    // Editando a mesma empresa, o email e nome podem ser iguais
    if (id == empresa.idempresa) {
      // Verifica se há banners para remover
      if (req.body.banners_removidos) {
        try {
          const { data } = JSON.parse(req.body.banners_removidos);
          
       

          if (!Array.isArray(data) || data.length < 1) {
            throw new Error('Json invalido');
          }
        } catch (ex) {
          return requestInvalida.manipular(400, {
            msg: 'O campo banners_removidos deve ser um json valido, com a propriedade data contendo um array de ids',
          });
        }
      }

      return next();
    }

    return requestInvalida.manipular(400, {
      msg: 'Essa empresa já existe. Verifique nome e e-mail.',
    });
  } catch (ex) {
    return requestInvalida.manipular(500, {
      msg: 'Erro inesperado',
    });
  }
};
