export default function filteredByDetails(datas, mesReferencia) {

   const lazer = datas.filter(item => item.categoria === 'Lazer' && item.mes === mesReferencia).sort((a,b) => a.dia - b.dia)
   const alimentacao = datas.filter(item => item.categoria === 'Alimentação' && item.mes === mesReferencia).sort((a,b) => a.dia - b.dia)
   const moradia = datas.filter(item => item.categoria === 'Moradia' && item.mes === mesReferencia).sort((a,b) => a.dia - b.dia)
   const saude = datas.filter(item => item.categoria === 'Saúde' && item.mes === mesReferencia).sort((a,b) => a.dia - b.dia)
   const transporte = datas.filter(item => item.categoria === 'Transporte' && item.mes === mesReferencia).sort((a,b) => a.dia - b.dia)
   
   const totalConsumedLazer = lazer.map(item => item.valor).reduce((acc,curr) => acc + curr,0).toFixed(2)
   const totalConsumedAlimentacao = alimentacao.map(item => item.valor).reduce((acc,curr) => acc + curr,0).toFixed(2)
   const totalConsumedMoradia = moradia.map(item => item.valor).reduce((acc,curr) => acc + curr, 0).toFixed(2)
   const totalConsumedSaude = saude.map(item => item.valor).reduce((acc,curr) => acc + curr,0).toFixed(2)
   const totalConsumedTransporte = transporte.map(item => item.valor).reduce((acc,curr) => acc + curr,0).toFixed(2)
   
   const newArr = [
       {id: 1, categoria: "Alimentação", valorTotal: totalConsumedAlimentacao},
       {id: 2, categoria: "Lazer", valorTotal: totalConsumedLazer},
       {id: 3, categoria: "Moradia", valorTotal: totalConsumedMoradia},
       {id: 4, categoria: "Saúde", valorTotal: totalConsumedSaude},
       {id: 5, categoria: "Transporte", valorTotal: totalConsumedTransporte}
   ]
   
   return newArr
}