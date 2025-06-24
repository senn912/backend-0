require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const webRoutes = require('./routes/web');
console.log("check env: ", process.env);

// config template engine
configViewEngine(app);

//das

//khai báo route
app.use('/', webRoutes);
//app.use('/test', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

