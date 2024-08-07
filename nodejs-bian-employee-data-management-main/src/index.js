var express = require('express');
const { PORT } = require('./config');
const routes  = require('./routes/app.route');
var app = express();

app.use(express.json());
app.use('/savings-account/v1.0', routes);

app.listen(PORT,()=>{
    console.log('Server listen on Port: ' + PORT)
})

module.exports = app;
