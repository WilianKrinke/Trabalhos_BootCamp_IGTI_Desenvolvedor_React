async function getContent() {
    try {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json()
        console.log(data)
        loadData(data)
        handlePieGraphic(data)
        handleBarsGraphics()
    } catch (error) {
        console.log(error)
    }
}
getContent();


const loadData = (data) => {

    const totalConfirmadoseEl = document.getElementById('totalConfirmados');
    const totalMortosEl = document.getElementById('totalMortos');
    const totalRecuperados = document.getElementById('totalRecuperados');
    const dataEl = document.querySelector('.date-update');

    totalConfirmadoseEl.textContent = data.TotalConfirmed.toLocaleString("pt-BR")
    totalMortosEl.textContent = data.TotalDeaths.toLocaleString("pt-BR")
    totalRecuperados.textContent = data.TotalRecuperados
    dataEl.textContent = `Data Atualizada: ${data.DataAtualizada}`
}






















































//Graphicos
const handlePieGraphic = (nums) => {
    let pieChart = new Chart(document.getElementById('novocasospizza'),{
        type: 'pie',
        data: {
            labels: ['Confirmados', 'Recuperados', 'Mortes'],
            datasets: [
                {
                    label: ['Confirmados','Recuperados','Mortes'],
                    data: [nums.TotalConfirmados, nums.TotalRecuperados, nums.TotalMortos],
                    backgroundColor: ['rgb(223, 223, 223)','rgb(0, 255, 0)','rgb(255, 0, 0)'],
                }
            ]
        },
        options: {
        cutoutPercentage: 0,
        responsive: false,
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


const handleBarsGraphics = () => {
    let bars = new Chart(document.getElementById('barrastop10'), {
        type: 'bar',
        data: {
            labels: ['Pais1','Pais2','Pais3','Pais4','Pais5','Pais6','Pais7','Pais8','Pais9','Pais10'],
            datasets: [
                {
                    label: 'Teste',
                    data: [10,20,30,40,50,60,70,80,90,100],
                    backgroundColor: '#ccc'
                }
            ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Total de Mortes por Pais - Top 10'
            }
          }
        }
    })
}














    
  