const express = require('express')
const app = express()

const http = require('http')

app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get('/',(req,res) => {
    res.render('index')
})

app.listen(3030)