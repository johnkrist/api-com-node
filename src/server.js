const express = require('express');
const app = express();

app.get ('/', (req, res) =>{
    res.send('Ola mundo');
});

app.listen(3000, ()=>{
    console.log('a api esta rodando na porta 3000.')
});