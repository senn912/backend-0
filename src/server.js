
const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;

console.log("check env: ", process.env);
// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World \n Test code dung express and ronaldo \n')
})

app.get('/abc', (req, res) => {
    //res.send('Check route abc ')
    res.render('sample.ejs')
})



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

