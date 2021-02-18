const Client=require('./model')

const createClient=(req,res)=>{
    const newClient= new Client({
        nombre:'Andres',
        direccion:'cl 1 1 11',
        celular:'310 1 23 45 67',
        correo:'algo@dom.com'
    })
    newClient.save((error,clientSaved)=>{
        if(error){
            console.error('Error al momento de guardar',error)
            res.status(500).send(error)
        }else{            
            res.send(clientSaved)
        }        
    })
}

module.exports={createClient}