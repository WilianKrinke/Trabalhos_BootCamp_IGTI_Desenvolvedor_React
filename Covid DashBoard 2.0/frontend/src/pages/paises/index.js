//Load Inicial
async function loadDatas1() {
    try {
        const response = await fetch('http://localhost:8080/paises')
        const data = await response.json()
        insertCountries(data)
        insertCountriesDataBrazil()
    } catch (error) {
        console.log(error)
    }    
}
loadDatas1()


function insertCountries(data) {
    data.map(item => {
        const options = document.createElement('option');

        const txt = document.createTextNode(`${item.Country}`)

        options.appendChild(txt)
        options.value = item.Country
        options.id = 'option'

        const elementDom = document.getElementById('selectPais')
        elementDom.appendChild(options)
    })
}

async function insertCountriesDataBrazil() {
    //Dia Atual   
    const today = new Date();
    const dia = today.getDate();
    const mes = today.getMonth();
    const ano = today.getFullYear();
    const dataAtual = `${ano}-0${mes}-${dia}`

    //Dados
    const response = await fetch(`https://api.covid19api.com/country/brazil?from=${dataAtual}T00:00:00Z&to=${dataAtual}T00:00:00Z`);

    const data = await response.json()
    const ultimoDia = data.map(item => item).pop()  

    const totalDeaths = ultimoDia.Deaths
    const totalRecovered = ultimoDia.Recovered
    const totalConfirmed = ultimoDia.Confirmed

    const totalDeathsEL = document.getElementById('totalDeaths')
    const totalConfirmedEL = document.getElementById('totalCasosConfirmados')
    const totalRecoveredEL = document.getElementById('totalRecovered')

    //Inserção de Dados
    totalDeathsEL.textContent = totalDeaths.toLocaleString() == 0 ? 'Atualizando' : totalDeaths.toLocaleString();
    totalConfirmedEL.textContent = totalConfirmed.toLocaleString() == 0 ? 'Atualizando' : totalConfirmed.toLocaleString();
    totalRecoveredEL.textContent = totalRecovered.toLocaleString() == 0 ? 'Atualizando' : totalRecovered.toLocaleString();
    
    //Grafico Inicial
    initialHandlePieGraphic(data, dataAtual)
}

/*--------------------------------------------------------------------------------------------------------*/
//Grafico Inicial
const initialHandlePieGraphic = async (data, todayDate) => {

    
    const dataFiltered = data.filter(item => {
        if (item.Date == `${todayDate}T00:00:00Z`) {
            return item
        }        
    })

    new Chart(document.getElementById('line-graphic'),{
        type: 'line',
        data: {
            labels: '',
            datasets: [{
                label: 'Brazil',
                data: dataFiltered,
                fill: false,
                borderColor: 'rgb(80, 80, 79)',
                tension: 0.1,
                backGroundColor: 'rgb(80, 80, 79)'
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
                    text: 'Dados Iniciais Totais'
                }
            }
        },
    })
}


/*-----------------------------------------------------------------------------------------------------*/
//Load de Evento de Click
document.getElementById('btn').addEventListener('click', async () => {
    const selectPais = document.getElementById('selectPais');
    const optionPais = selectPais.selectedOptions[0];    
    //Dados 
    
    const pais = optionPais.textContent.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const initialDate = document.getElementById('initialDate').value;
    const finalDate = document.getElementById('finalDate').value;

    const response = await fetch(`https://api.covid19api.com/country/${pais}?from=${initialDate}T00:00:00Z&to=${finalDate}T00:00:00Z`);

    const data = await response.json()
    const ultimoDia = data.map(item => item).pop()

    const totalDeaths = ultimoDia.Deaths
    const totalRecovered = ultimoDia.Recovered
    const totalConfirmed = ultimoDia.Confirmed

    //Inserção de dados
    const totalDeathsEL = document.getElementById('totalDeaths')
    const totalConfirmedEL = document.getElementById('totalCasosConfirmados')
    const totalRecoveredEL = document.getElementById('totalRecovered')

    totalDeathsEL.textContent = totalDeaths.toLocaleString() == 0 ? 'Atualizando' : totalDeaths.toLocaleString();
    totalConfirmedEL.textContent = totalConfirmed.toLocaleString() == 0 ? 'Atualizando' : totalConfirmed.toLocaleString();
    totalRecoveredEL.textContent = totalRecovered.toLocaleString() == 0 ? 'Atualizando' : totalRecovered.toLocaleString();


    //Tipo de dado exibido no gráfico
    const selectDados = document.getElementById('selectDados');
    const optionType = selectDados.selectedOptions[0];
    const typeData = optionType.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const labelName = optionType.textContent;

    //Passar para gráfico, pais, tipo de dados, e os dados
    onClickHandlePieGraphic(pais,typeData,data,labelName)
})

const onClickHandlePieGraphic = (pais,tipo,data,labelName) => {
    //Dados Tratados
    const periodoEixoX = data.map(item => item.Date.slice(0,10))

    const arrDeaths = data.map(item => item.Deaths)
    const arrRecovered = data.map(item => item.Recovered)
    const arrConfirmed = data.map(item => item.Confirmed)

    let dadosPrincipalDoGráfico = []

    switch (tipo) {
        case 'nummortos':
            arrDeaths.map(element => {
                dadosPrincipalDoGráfico.push(element)
            });
        break;

        case 'numrecuperados':
            arrRecovered.map(element => {
                dadosPrincipalDoGráfico.push(element)
            });
        break;

        case 'numcasosconfirmados':
            arrConfirmed.map(element => {
                dadosPrincipalDoGráfico.push(element)
            });
        break;
        default:
            break;
    }

    //Condição de entrega de gráficos
    const canvas1 = document.querySelector('.canvas')
    if (canvas1.id == 'line-graphic') {
        //Remover elemento
        const articleGraphicEl = document.querySelector('.article-graphic')
        articleGraphicEl.removeChild(canvas1)
        
        const newGraphic = document.createElement('canvas');
        newGraphic.id = 'line-graphic2'
        newGraphic.height = "100"
        newGraphic.classList.add('canvas')
        articleGraphicEl.appendChild(newGraphic)
        new Chart(document.getElementById('line-graphic2'),{
            type: 'line',
            data: {
                labels: periodoEixoX,
                datasets: [{
                    label: pais,
                    data: dadosPrincipalDoGráfico,
                    fill: false,
                    borderColor: 'rgb(80, 80, 79)',
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
                        text: labelName
                    }
                }
            },
        }) 
    } else if(canvas1.id == 'line-graphic2'){
        //remover elemento
        const articleGraphicEl = document.querySelector('.article-graphic')
        articleGraphicEl.removeChild(canvas1)
        
        const newGraphic = document.createElement('canvas');
        newGraphic.id = 'line-graphic'
        newGraphic.height = "100"
        newGraphic.classList.add('canvas')
        articleGraphicEl.appendChild(newGraphic)
        new Chart(document.getElementById('line-graphic'),{
            type: 'line',
            data: {
                labels: periodoEixoX,
                datasets: [{
                    label: pais,
                    data: dadosPrincipalDoGráfico,
                    fill: false,
                    borderColor: 'rgb(80, 80, 79)',
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
                        text: labelName
                    }
                }
            },
        })   
    }
}
