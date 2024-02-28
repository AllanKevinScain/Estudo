const { extname } = require('path');

const multer = require('multer');

/**
 * Responsável por:
 * * Escrever os arquivos da request em determinada pasta;
 * * Cria um uma variavel files na request que contem informações dos arquivos;
 * @param {string} nomeInput O campo da request que irá conter ps arquivos
 * @param {string} destino Caminho de destino
 */
exports.carregarArquivos = (nomeInput, destino) => {
  const _multer = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destino);
    },

    filename: function (req, file, cb) {
      file.format = extname(file.originalname);
      file.newName = `${file.fieldname}-${Date.now()}`;
      file.originalname = file.originalname.replace(file.format, '');
      file.format = file.format.replace('.', '');

      cb(null, `${file.newName}.${file.format}`);
    },
  });

  return multer({ storage: _multer }).array(nomeInput);
};
