const express = require('express');
const app = express();
const path = require('path');

app.get('/api/customers/', (req, res)=>{

    const customers = [
        {id:1, name:'rishan', age:'35'},
        {id:2, name:'chamil', age:'32'},
        {id:3, name:'Thiwanka', age:'40'},
    ]


    res.json(customers);
})

app.get('/', (req, res) => {
    console.log('Url Not match', path.join(__dirname, './client/public/index.html'))
    res.sendFile(path.join(__dirname, './client/public/index.html'));
    
  });

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server run on ${port}`)
})