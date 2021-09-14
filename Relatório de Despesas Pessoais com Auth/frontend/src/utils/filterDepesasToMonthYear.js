export default function filterDespesasToMonthYear(datas, mesReferencia) {
    const filteredDatas = datas.filter(item => item.mes === mesReferencia)
    return filteredDatas
}