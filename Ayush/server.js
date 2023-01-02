const express=require('express');
const app=express();
const path=require('path');

app.get('/',(req,resp)=>{
    resp.send("<h1>Server is running!!!</h1>")
})

app.get('/home',(req,resp)=>{
    resp.sendFile(path.join(__dirname,"public/index.html"))
})
app.listen(9084);