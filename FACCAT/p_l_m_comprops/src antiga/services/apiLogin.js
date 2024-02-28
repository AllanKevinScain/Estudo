module.exports = async function (callback, url, metodo, paramEmail, paramSenha) {
  const response = await fetch(url, {
    method: metodo,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: paramEmail,
      senha: paramSenha
    })
  })
  const json = await response.json()
  callback(json.msg, json.logado)
}