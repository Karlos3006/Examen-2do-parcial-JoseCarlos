const express = require('express');
const rutasVinos=require('./rutas/rutasVino');
const rutasRefrescos=require('./rutas/rutasRefresco');
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/vinos',rutasVinos);
app.use('/refrescos',rutasRefrescos);

module.exports= app;