
async function sendDatas() {
    alert('Mandou')
}























//Grafico
const handlePieGraphic = () => {
    new Chart(document.getElementById('line-graphic'),{
        type: 'line',
        data: {
            labels: 'Datas'/*Datas de incio e fim*/,
            datasets: [{
                label: 'País',
                data: [65, 59, 80, 81, 56, 55, 40]/*Numeros de tal coisa eixo x*/,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backGroundColor: 'rgb(58, 58, 58)'
              }]            
        },

        options: {
            cutoutPercentage: 0,
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribuição de Novos Casos'
                }
            }
        },
    })
}
handlePieGraphic()