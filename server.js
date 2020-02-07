const express = require('express');
const app = express();


app.get('/api/customers/', (req, res)=>{

    const customers = [
        {id:1, name:'rishan', age:'35'},
        {id:2, name:'chamil', age:'32'},
        {id:3, name:'Thiwanka', age:'40'},
    ]


    res.send(customers);
})

const port = 5000;

app.listen(port, ()=>{
    console.log(`Server run on ${port}`)
})