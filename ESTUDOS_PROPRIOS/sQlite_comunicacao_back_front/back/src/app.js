/* 
  importar desta forma:
  import express from "express";
  e nao desta:
  const express = require("express");
  precisa do:
  "type": "module"
  no arquivo package.json
 */
import express from "express";
import router from "./routers.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(4004, () => console.log("Api rodando Gurizada!"));

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key')
}, app).listen(4444, () => console.log("Rodando em HTTPS Gurizada!"));