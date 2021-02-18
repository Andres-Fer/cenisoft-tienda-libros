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

const getClient = (req, res) => {
    Client.findById(req.params.id, (error, client) => {
      if (error) {
        res.status(500).send(error)
      } else if (client) {
        res.send(client)
      } else {
        res.status(404).send({})
      }
    })
  }


const updateClient = (req, res) => {
    Client.updateOne({ _id: req.params.id }, req.body, (error, result) => {
      if (error) {
        res.status(422).send(error)
      } else {
        res.send(result)
      }
    })
  }

  const deleteClient = (req, res) => {
    Client.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) {
        res.status(500).send(error)
      } else {
        res.status(204)
      }
    })
  }

module.exports={createClient,getClient,updateClient,deleteClient}