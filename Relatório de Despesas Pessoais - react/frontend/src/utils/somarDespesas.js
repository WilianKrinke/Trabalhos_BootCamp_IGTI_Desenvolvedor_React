export async function somarDespesas(ano, mes) {
    const datas = await fetch(`http://localhost:3001/despesas?mes=${ano}-${mes}&_sort=dia`)
    const datasJson = await datas.json()

    return datasJson;
}