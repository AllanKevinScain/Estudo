module.exports = async function (
  callback,
  url,
  paramName,
  paramEmail,
  paramPhone,
  paramPass
) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome: paramName,
      email: paramEmail,
      telefone: paramPhone,
      senha: paramPass,
      cargo_idcargo: 1
    })
  })
  const json = await response.json()
  callback(json.msg, json.cadastrado)
}

/* ,
  paramNome,
  paramEmail,
  paramTelefone,
  paramCargo,
  paramSenha */