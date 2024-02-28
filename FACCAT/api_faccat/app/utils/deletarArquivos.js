const fs = require('fs');
const path = require('path');

/**
 * @param  {Array<string>} caminhos
 */
const deletarArquivos = (caminhos) => {
  caminhos?.map((caminhoArquivo) => {
    const _path = path.join(__dirname, '..', '..', caminhoArquivo);
    fs.unlinkSync(_path);
  });
};

module.exports = deletarArquivos;
