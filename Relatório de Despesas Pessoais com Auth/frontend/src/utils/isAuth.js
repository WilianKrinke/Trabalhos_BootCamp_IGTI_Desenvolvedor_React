export default function isAuth() {
    return fetch('http://localhost:3001/sessao/usuario', {
        credentials: 'include',
        method: 'GET'
    })
        .then(resp => {
            if (resp) {                
                return resp.json()
            } else {
                throw new Error(resp.statusText)
            }
        })
}