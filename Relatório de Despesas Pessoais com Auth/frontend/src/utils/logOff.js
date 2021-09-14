export default function logOff(e,history) {
    e.preventDefault()
    return fetch('http://localhost:3001/sessao/finalizar', {
        credentials: 'include',
        method: 'POST'
    }).then(resp => history.push('/'))

}