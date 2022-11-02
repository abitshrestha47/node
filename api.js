const express=require('express');
const { ConnectionClosedEvent } = require('mongodb');
const dbConnect=require('./db_connect');

const app=express();

app.get('/',async (req,res)=>{
    let data=await dbConnect();
    data=await data.find({}).toArray();
    // console.log(data);
    // let myJson=JSON.stringify(data);
    res.send({data});
});


app.listen(5000);
