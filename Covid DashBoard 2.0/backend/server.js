const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//Fazer requisições das apis e consumi-las no front

app.get('/', async (req,res) => {
    const {data} = await axios.get('https://api.covid19api.com/summary')
    res.send(data)
})

app.get('/paises', async (req, res) => {
    const {data} = await axios.get('https://api.covid19api.com/countries')
    res.send(data)
})

// app.get('/paises/filtered', async (req, res) => {
//     const {initialDate, finalDate, pais, dataType} = req.query;
//     const {data} = await axios.get(`https://api.covid19api.com/country/${pais.toLowerCase()}?from=${initialDate}T00:00:00Z&to=${finalDate}T00:00:00Z`);
//     res.send(data)
// })

app.listen(8080, () => {
    console.log('Listen 8080')
})