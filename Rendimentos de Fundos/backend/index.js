const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const infos = require('./json/investments-2.json')

app.get('/', (req, res) => {
    res.send(infos)
})

app.listen(8080, () =>{
    console.log('http://localhost:8080/')
})