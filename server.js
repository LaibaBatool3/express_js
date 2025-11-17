const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/",logger, (req,res)=>{
    console.log("Here")
    res.render('index', {text: "World"})
})

app.use(logger)
const userRouter = require('./routers/users')

app.use("/users", userRouter)

function logger(req, res, next){
         console.log(req.originalUrl)
    }

app.listen(3000)


