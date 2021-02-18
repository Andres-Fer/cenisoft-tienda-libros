const express = require ('express')
const app =express()
require('./db')

const clientRoutes=require('./components/client/routes')

app.listen(3000,() =>{
    console.log('El servidor esta encendido')
})
