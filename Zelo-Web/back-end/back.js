import express from 'express'
import Sequelize from 'sequelize'
const app = express()
const sequelize = new Sequelize()

app.post('/enviar',async function (req,res) {
    try{
        const [name,password,email] = req.body

        const newUser = await user.create()
    }
})

app.listen(8083,()=>{
    console.log("Server rodando")
})