require('babel-register')

const express = require('express') 
const app = express()

app.use((req,res,next)=>{
    console.log("URL :"+req.url)
    next()
})
app.get('/api',(req,res)=>{
    res.send('Root API')
})
app.get('/api/book/:id',(req,res)=>{
    res.send(req.params)
})


app.listen('8080',()=>{
    console.log('started 8080')
})
