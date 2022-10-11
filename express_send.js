var express=require('express');
app=express();

app.get('',(req,res)=>{
    res.send('this is the home page');
})

app.get('/about',(req,res)=>{
    res.send('this is the about us page');
})

app.get('/contact',(req,res)=>{
    res.send('this is the contact page');
})
app.listen(9000);