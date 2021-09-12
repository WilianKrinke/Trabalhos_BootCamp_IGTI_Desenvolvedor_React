export default function isAuth() {
    return fetch('http://localhost:3001/sessao/usuario', {
        credentials: 'include',
        method: 'GET'
    })
        .then(resp => {
            if (resp.ok) {                
                return resp.json()
            } else {
                return resp
            }
        })
}