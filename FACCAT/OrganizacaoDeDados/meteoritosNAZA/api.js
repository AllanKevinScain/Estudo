const axios = require("axios");

const url =
  "https://meteoronaza.blob.core.windows.net/meteoronaza/meteoritos.json?sp=r&st=2022-06-06T19:02:05Z&se=2022-06-07T03:02:05Z&sv=2020-08-04&sr=c&sig=c1BFmzHLNRe12hYF1Rf0SQPkas%2BkvHNe%2B2X86Fooss0%3D";
const api = axios.create({
  baseURL: `${url}`,
});

module.exports = api;
