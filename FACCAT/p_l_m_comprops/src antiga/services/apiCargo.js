module.exports = async function (callback, url) {
  const response = await fetch(url);
  const json = await response.json();
  callback("está funcionando", json);
};

//função para colocar no código
/*
function cargo() {
    APICARGO(function (string, numero) {
      console.log(string);
      console.log(numero);
    }, "http://localhost:5000/lercargo");
  }
 */