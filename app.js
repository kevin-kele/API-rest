require('babel-register')

const express = require('express') 
const app = express()

// Debug console
const morgan = require('morgan')

const func = require('function')
const bodyParser = require('body-parser')

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


app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/api',(req,res)=>{
    res.send('Root API')
})

app.get('/api/book/:id',(req,res)=>{
    res.send(req.params)
})

app.get('/api/members/:id',(req,res)=>{
    res.send(func.succes(members[(req.params.id)-1]))
})

app.get('/api/members',(req,res)=>{
    if (req.query.max -= undeined && req.query.max>0) {
        res.json(func.succes(members.slice(0,req.query.max)))
    }else{
        res.json(func.succes(members))
    }
    
})

app.post('/api/members',(req,res)=>{
    res.send(req.body)
})


app.listen('8080',()=>{
    console.log('started 8080')
})
