const express = require('express');
const { report } = require('process');
const request = require('request');
const app = express();
app.get('/server',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    report.send();
})
app.listen(8000,()=>{
    console.log("服务已经启动");
});