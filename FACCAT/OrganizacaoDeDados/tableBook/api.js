const axios = require("axios");

const api = axios.create({
  baseURL: "https://tablebook.blob.core.windows.net/book-one/book.xml",
});

module.exports = api;
