async function getContent() {
    try {
        const response = await fetch('http://localhost:8080/');
        const data = await response.json()
        loadData(data)
        handlePieGraphic(data)
        handleBarsGraphics(data)
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

    totalConfirmadoseEl.textContent = data.Global.TotalConfirmed.toLocaleString("pt-BR")
    totalMortosEl.textContent = data.Global.TotalDeaths.toLocaleString("pt-BR")
    totalRecuperados.textContent = (data.Global.TotalConfirmed - data.Global.TotalDeaths).toLocaleString("pt-BR")
    dataEl.textContent = `Data Atualizada: ${data.Global.Date.toLocaleString("pt-BR")}`
}











//Graphicos
const handlePieGraphic = (numbers) => {
    let pieChart = new Chart(document.getElementById('novocasospizza'),{
        type: 'pie',
        data: {
            labels: ['Confirmados', 'Recuperados', 'Mortes'],
            datasets: [
                {
                    label: ['Confirmados','Recuperados','Mortes'],
                    data: [numbers.Global.TotalConfirmed, (numbers.Global.TotalConfirmed - numbers.Global.TotalDeaths), numbers.Global.TotalDeaths],
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


const handleBarsGraphics = (datas) => {
    const tenCountriesDeath = topTenCountriesDeath(datas.Countries)
    const country = tenCountriesDeath.map(item => item.Country)
    const numbers = tenCountriesDeath.map(item => item.TotalDeaths)
    let bars = new Chart(document.getElementById('barrastop10'), {
        type: 'bar',
        data: {
            labels: [country[0],country[1],country[2],country[3],country[4],country[5],country[6],country[7],country[8],country[9]],
            datasets: [
                {
                    label: 'Total de Mortos',
                    data: [numbers[0],numbers[1],numbers[2],numbers[3],numbers[4],numbers[5],numbers[6],numbers[7],numbers[8],numbers[9]],
                    backgroundColor: '#5d6063'
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

function topTenCountriesDeath(data) {
  const deaths = data.map(item => {
    return item.TotalDeaths
  })
  function comparaNum(a,b) {
    return a - b;
  }  
  const topTenDeathsNumbers = deaths.sort(comparaNum).reverse().splice(0,10)

  let count = 0
  let topTen = []
  while (count < 10) {
    data.filter(item => {
      if (item.TotalDeaths == topTenDeathsNumbers[count]) {
        topTen.push(item)
      }
    })
    count++
  }  

  return topTen;
}














    
  