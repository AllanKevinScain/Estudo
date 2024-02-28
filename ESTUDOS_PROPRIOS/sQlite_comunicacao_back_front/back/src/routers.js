import { Router } from 'express';
import {
  createTable,
  insertPessoa,
  updatePessoa,
  selectPessoa,
  selectPessoas,
  deletePessoa
} from "./controler/pessoa.js";

const router = Router();

/* para avisar que a api está funcionando */
router.get('/', (req, res) => {
  res.json({
    "statusCode": 200,
    "msg": "API RODANDO"
  });
});

/* caso nao exista tabela pessoa, este endpoint cria uma tabela Pessoa */
/* router.get('/pessoa', createTable); */

/* end point que busca todas as pessoas da tabela */
router.get('/pessoas', selectPessoas);

/* end point que busca uma pessoa da tabela */
router.get('/pessoa/:id', selectPessoa);

/* end point que cadastra uma pessoa da tabela */
router.post('/pessoa', insertPessoa);

/* end point que altera os dados de uma pessoa da tabela */
router.put('/pessoa', updatePessoa);

/* end point que deleta uma pessoa da tabela */
router.delete('/pessoa/:id', deletePessoa);

export default router;