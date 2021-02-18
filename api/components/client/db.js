const mongoose =require ('mongoose')

mongoose.connect('mongodb://localhost:27017/bitLibreria',{ useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true }) // colocar la direccion de la base de datos de mongosedb

const con=mongoose.connection
con.on('error',console.error.bind(console,'error al conectar a la base de datos'))
con.once('open',()=>{
    console.log('conectado a la base de datos')


})