export default async function getDatas(year = 2003, rodada = 46) {

    console.log(rodada)
    console.log(year)

    const datas = await fetch(`http://localhost:3001/${year}`)
    const datasJson = await datas.json()
    console.log(datasJson)
}