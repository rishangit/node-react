const express = require('express');
const app = express();


app.get('/api/customers/', (req, res)=>{

    const customers = [
        {id:1, name:'rishan', age:'35'},
        {id:2, name:'chamil', age:'32'},
        {id:3, name:'Thiwanka', age:'40'},
    ]


    res.json(customers);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/public/index.html'));
    console.log('Url Not match')
  });

const port = 8080;

app.listen(port, ()=>{
    console.log(`Server run on ${port}`)
})