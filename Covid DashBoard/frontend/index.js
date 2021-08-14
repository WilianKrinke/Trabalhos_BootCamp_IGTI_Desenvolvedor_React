"use strict";
//Initial Load
fetch('https://api.covid19api.com/summary')
    .then(resp => resp.json())
    .then(json => {
        //Task
        loadStatus(json)
    })
    .catch(err => console.log(err))

function loadStatus(data) {
    const globalData = data.Global;
    const totalConfirmed = globalData.TotalConfirmed.toLocaleString("pt-BR")
    const totalDeaths = globalData.TotalDeaths.toLocaleString("pt-BR")
    const totalRecovered = globalData.TotalRecovered.toLocaleString("pt-BR")
    const newConfrimed = globalData.NewConfirmed.toLocaleString("pt-BR")

    //DOM El
    const totalCasosEl = document.getElementById('id_total_casos')
    const totalMortosEl = document.getElementById('id_total_mortos')
    const totalRecuperadosEl = document.getElementById('id_total_recuperados')
    const totalCasosAtivosEl = document.getElementById('id_total_casos_ativos')

    totalCasosEl.textContent = totalConfirmed == 0 ? "Não há registros" : totalConfirmed;
    totalMortosEl.textContent = totalDeaths == 0 ? "Não há registros" : totalDeaths;
    totalRecuperadosEl.textContent = totalRecovered == 0 ? "Não há registros" : totalRecovered;
    totalCasosAtivosEl.textContent = newConfrimed == 0 ? "Não há registros" : newConfrimed;     

    const countriesData = data.Countries;

    //Task
    createNewOptions(countriesData)       
}

function createNewOptions(countriesData) {
    const countries = countriesData    
    countries.map(item => {

        const options = document.createElement('option');
        const txt = document.createTextNode(`${item.Country}`)

        options.appendChild(txt)
        options.value = item.Country
        options.id = 'option'

        const elementDom = document.getElementById('combo')
        elementDom.appendChild(options)
    })
}


//OnChange Load Countries
const select = document.getElementById('combo');
select.addEventListener('change', function() {
    const option = this.selectedOptions[0];
    const selectText = option.textContent;    

    fetch('https://api.covid19api.com/summary')
    .then(resp => resp.json())
    .then(json => { 
              
        if (selectText == "Global") {
            loadStatus(json)            
        } else {
            loadNumbers(json, selectText)
        }
    })
    .catch(err => console.log(err))
});

function loadNumbers(datas, selectText) {    
    const dataCountries = datas.Countries;
    const countries = dataCountries.filter((item) => {
        if (item.Country == selectText) {
            return item
        } 
    })

    //DOM EL
    const totalCasosEl = document.getElementById('id_total_casos')
    const totalMortosEl = document.getElementById('id_total_mortos')
    const totalRecuperadosEl = document.getElementById('id_total_recuperados')
    const totalCasosAtivosEl = document.getElementById('id_total_casos_ativos')

    const countryData = countries.map(item => {
        const totalConfirmed = item.TotalConfirmed.toLocaleString("pt-BR")
        const totalDeaths = item.TotalDeaths.toLocaleString("pt-BR")
        const totalRecovered = item.TotalRecovered.toLocaleString("pt-BR")
        const newConfrimed = item.NewConfirmed.toLocaleString("pt-BR")

        totalCasosEl.textContent = totalConfirmed == 0 ? "Não há registros" : totalConfirmed;
        totalMortosEl.textContent = totalDeaths == 0 ? "Não há registros" : totalDeaths;
        totalRecuperadosEl.textContent = totalRecovered == 0 ? "Não há registros" : totalRecovered;
        totalCasosAtivosEl.textContent = newConfrimed == 0 ? "Não há registros" : newConfrimed;
    })
};

const inputDate = document.getElementById('today')
inputDate.addEventListener('change', () => {
    const select = document.getElementById('combo');
    const option = select.selectedOptions[0];
    const selectText = option.textContent.toLowerCase();
    const inputDate = document.getElementById('today').value

    fetch(`https://api.covid19api.com/country/${selectText}?from=${inputDate}T00:00:00Z&to=${inputDate}T00:00:00Z`)
        .then(resp => resp.json())
        .then(json => {
            const datas = json.filter(item => {
                if (item.Date == `${inputDate}T00:00:00Z`) {
                    return item
                }
            })
            console.log(datas)

            const totalCasosEl = document.getElementById('id_total_casos')
            const totalMortosEl = document.getElementById('id_total_mortos')
            const totalRecuperadosEl = document.getElementById('id_total_recuperados')
            const totalCasosAtivosEl = document.getElementById('id_total_casos_ativos')

            datas.map(item => {
                const totalConfirmed = item.Confirmed.toLocaleString("pt-BR")
                const totalDeaths = item.Deaths.toLocaleString("pt-BR")
                const totalRecovered = item.Recovered.toLocaleString("pt-BR")
                const newConfrimed = item.Active.toLocaleString("pt-BR")

                totalCasosEl.textContent = totalConfirmed == 0 ? "Não há registros" : totalConfirmed;
                totalMortosEl.textContent = totalDeaths == 0 ? "Não há registros" : totalDeaths;
                totalRecuperadosEl.textContent = totalRecovered == 0 ? "Não há registros" : totalRecovered;
                totalCasosAtivosEl.textContent = newConfrimed == 0 ? "Não há registros" : newConfrimed;
            })  
        })
        .catch(err => console.log(err))
})


















    