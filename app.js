require('babel-register')

const express = require('express') 
const app = express()

const morgan = require('morgan')


const members= [
    {
        id:1,
        name:"kevin"
    },
    {
        id:2,
        name:"junior"
    },
    {
        id:3,
        name:"keyate"
    },
]


app.use(morgan("dev"))

app.get('/api',(req,res)=>{
    res.send('Root API')
})

app.get('/api/book/:id',(req,res)=>{
    res.send(req.params)
})

app.get('/api/members/:id',(req,res)=>{
    res.send(members[(req.params.id)-1])
})


app.listen('8080',()=>{
    console.log('started 8080')
})
