const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());




//Fazer requisições das apis e consumi-las no front



app.listen(8080, () => {
    console.log('Listen 8080')
})