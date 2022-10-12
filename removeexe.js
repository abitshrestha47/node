var express=require('express');
var path=require('path');
var app=express();

console.log(__dirname);
var publicPath=path.join(__dirname,'public');
console.log(publicPath);
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})
app.get('/description',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})
app.get('/feedback',(_,res)=>{
    res.sendFile(`${publicPath}/review.html`);
})
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/nopagefound.html`);
})

app.listen(1000);