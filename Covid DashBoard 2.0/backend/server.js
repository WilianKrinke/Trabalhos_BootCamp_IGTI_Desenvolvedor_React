const {tratData} = require('./utils')
const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

//Fazer requisições das apis e consumi-las no front

app.get('/', async (req,res) => {
    const {data} = await axios.get('https://api.covid19api.com/summary')
    res.send(data.Global)
})

app.post('/paises', (req, res) => {
    const {initialDate, finalDate, pais, dataType} = req.body
    console.log( '1º ' + initialDate, finalDate, pais, dataType)
    tratData(initialDate, finalDate, pais, dataType)

})

app.listen(8080, () => {
    console.log('Listen 8080')
})