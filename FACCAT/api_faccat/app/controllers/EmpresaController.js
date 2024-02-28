const path = require('path');

const {
  lerEmpresa,
  lerTodasEmpresas,
  cadastrarEmpresa,
  deletarEmpresa,
} = require('../repositories/empresaRepository');

const {
  cadastrarVariosBanners,
  deletarVariosBanners,
} = require('../repositories/empresaBannerRepository');

const deletarArquivos = require('../utils/deletarArquivos');

class EmpresaController {
  ler = async (req, res) => {
    const { id } = req.params;

    try {
      const empresa = await lerEmpresa(id);

      if (!empresa) {
        return res.status(400).json({ msg: 'A empresa não existe' });
      }

      return res.status(200).json(empresa);
    } catch (error) {
      return res.status(500).json({ msg: 'Ocorreu um erro ao ler a empresa' });
    }
  };

  lerTodos = async (req, res) => {
    try {
      const empresas = await lerTodasEmpresas();

      if (!empresas) {
        return res.status(500).json({ msg: 'Algo deu errado!' });
      }

      return res.status(200).json(empresas);
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao ler mais de um clientes' });
    }
  };

  cadastrar = async (req, res) => {
    try {
      const banners = req.files.map((banner) => ({
        titulo: banner.newName,
        formato: banner.format,
        titulo_original: banner.originalname,
      }));

      const empresa = await cadastrarEmpresa(req.body, banners);

      if (!empresa) {
        return res
          .status(400)
          .json({ msg: 'Erro ao cadastrar empresa', cadastrado: 0 });
      }

      return res.status(201).json({ msg: 'Empresa cadastrada', cadastrado: 1 });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Erro ao cadastrar esta empresa', cadastrado: 0 });
    }
  };

  alterar = async (req, res) => {
    const { id } = req.params;

    try {
      const empresa = await lerEmpresa(id);
      const empresaAtualizada = await empresa.update(req.body);

      if (!empresaAtualizada) {
        return res
          .status(400)
          .json({ msg: 'Ocorreu um erro ao alterar a empresa', alterado: 0 });
      }

      // Verifica se há novos banners para adicionar
      let novosBanners = null;
      console.log(req.files)
      if (req.files.length > 0) {
        const banners = req.files.map((banner) => ({
          titulo: banner.newName,
          formato: banner.format,
          titulo_original: banner.originalname,
          id_empresa: id,
        }));

        novosBanners = await cadastrarVariosBanners(banners);
      }

      if (req.files.length > 0 && !novosBanners) {
        return res.status(400).json({
          msg: 'Ocorreu um erro ao adicionar os novos banners',
          alterado: 1,
        });
      }

      // Verfica se há banners para remover
      let bannersRemovidos = null;
      if (req.body.banners_removidos) {
        const { data } = JSON.parse(req.body.banners_removidos);

        // Filtra os dados para remover somente os banners da empresa atual
        const bannersParaDeletar = empresa.banners.filter((banner) =>
          data.includes(banner.id)
        );

        bannersRemovidos = await deletarVariosBanners(
          bannersParaDeletar.map((banner) => banner.id)
        );

        // Remove os banners do servidor
        if (bannersRemovidos === bannersParaDeletar.length) {
          const caminhoArquivos = bannersParaDeletar.map((banner) => {
            const nomeCompleto = `${banner.titulo}.${banner.formato}`;
            return path.join(process.env.EMPRESA_BANNERS_PATH, nomeCompleto);
          });

          deletarArquivos(caminhoArquivos);
        }
      }

      if (req.body.banners_removidos && bannersRemovidos < 1) {
        return res.status(400).json({
          msg: 'Ocorreu um erro ao remover um ou mais banners',
          alterado: 1,
        });
      }

      return res
        .status(200)
        .json({ msg: 'Empresa alterada com Sucesso', alterado: 1 });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao alterar a empresa', alterado: 0 });
    }
  };

  deletar = async (req, res) => {
    const { id } = req.params;

    try {
      const empresa = await deletarEmpresa(id);
      if (empresa[0] === 1) {
        //Se === 1, o valor de status_syz é alterado para 1(deletado logicamente)
        //console.log('Deletado com sucesso')
        return res
          .status(200)
          .json({ msg: 'Empresa deletada com sucesso!', deletado: 1 });
      }

      return res.status(400).json({
        msg: 'Não foi possível Deletar a empresa!',
        deletado: 0,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: 'Ocorreu um erro ao deletar a empresa', deletado: 0 });
    }
  };
}

module.exports = new EmpresaController();
