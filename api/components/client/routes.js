const { Router } = require('express')

const routes=require('express')
const router=express.Router()
const {createClient}=require('./actions')



// GET consultar por ID
router.get('/:id',(req,res)=>{
    res.send({
        
    })
})

// POST crear un cliente

router.post('/',createClient)

// PUT actualizar un cliente

router.put('/:id',(req,res)=>{
    res.send({
        nombre,
        direccion,
        celular,
        correo,
        contrasena
    })
})

// DELETE eliminar cliente por ID

router.delete('/:id',(req,res)=>{
    res.send('Cliente eliminado')
})

module.exports=router