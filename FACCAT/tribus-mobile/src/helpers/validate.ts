/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

const emailRule = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const numberRuler = /[0-9]/;
const lowerLetterRule = /[a-z]/;
const upperLetterRule = /[A-Z]/;

const validate = (data: { type: string, value: string; value2?: string }) => {
  switch (data.type) {
    case 'nome':
      if (data.value.length < 1) {
        return { hasError: true, msg: 'Nome inválido' }
      } else {
        return { hasError: false, msg: '' }
      }
    case 'email':
      if (!emailRule.test(data.value)) {
        return { hasError: true, msg: 'Email inválido' }
      } else {
        return { hasError: false, msg: '' }
      }
    case 'password':
      if (data.value.length < 8) {
        return { hasError: true, msg: 'Sua senha deve possuir pelo menos 8 caracteres' }
      }
      else if (!numberRuler.test(data.value)) {
        return { hasError: true, msg: 'É necessário ao menos 1 número' }
      } else if (!lowerLetterRule.test(data.value)) {
        return { hasError: true, msg: 'É necessário ao menos 1 letra minúscula' }
      } else if (!upperLetterRule.test(data.value)) {
        return { hasError: true, msg: 'É necessário ao menos 1 letra maiúscula' }
      } else if (data.value2 != undefined && data.value != data.value2) {
        return { hasError: true, msg: 'Senhas não coincidem' }
      }
      else {
        return { hasError: false, msg: '' }
      }
    case 'telefone':
      if (data.value.length < 11) {
        return { hasError: true, msg: 'Telefone inválido' }
      } else {
        return { hasError: false, msg: '' }
      }
    case 'tipo-usuario':
      if (data.value == '') {
        return { hasError: true, msg: 'Selecione uma opção' }
      } else {
        return { hasError: false, msg: '' }
      }
    default: { }
  }
  return {}
}
export { validate }