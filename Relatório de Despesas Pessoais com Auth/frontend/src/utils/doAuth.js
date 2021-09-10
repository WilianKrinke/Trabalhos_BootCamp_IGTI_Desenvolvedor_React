export default function doAuth(email, senha){
    return fetch('http://localhost:3001/sessao/criar',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, senha})
    })
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else if (res.status === 401) {
                return res
            }
        })
}