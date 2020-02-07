
import React, { useEffect, useState } from 'react';
import  './customer.css';
import {map} from 'rxjs/operators'
 
 const Customer =  ()=>{
    const [customers, setCustomers] = useState([])
    useEffect(()=>{
        console.log('get data')

        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => setCustomers(customers))

    },[])

    return(
        <div>
            <div>Customer</div>
             <div>{
             customers.map(customer=><div>{customer.name}</div>)}</div> 
        </div>
       
    )
 }

 export default Customer