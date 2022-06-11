import express from "express"
import cors from "cors"
import { users } from "./data"
import axios from "axios";

const app = express()


const PORT = process.env.PORT || 3001;

const user = {
  email: "adm@gmail.com",
  password: "adm123"
}

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/get", (req, res) => {
  res.status(200).send(users);
})

app.post("/login", (req, res)=>{
  try {
    const {email, password} = req.body;
    if(email != user.email){
      throw new Error("Erro de email")
    }else if(password != user.password) {
      throw new Error("Erro de senha")
    }else{
      res.send("login")
    }
  } catch (error) {
    res.status(422).send(error)
  }
})

app.post("/new", (req, res)=>{
  try {
    var {adress} = req.body;
  var adressSplited = adress.split("/")
    // 3(username), 4(repo) 
  var id = Math.floor(Math.random() * 65);
  var validation: any[] = users.find((user:any)=>{
    if (user.html_url === adress) {
      throw new Error("Repositório já cadastrado")
    }
  })

  axios.get(`https://api.github.com/repos/${adressSplited[3]}/${adressSplited[4]}`)
  .then((res)=>{
    users.push({id: id, name: adressSplited[4], login: adressSplited[3], html_url: adress })
  }).catch((err)=>{
  })
  res.send("Usuário adicionado com sucesso")
  } catch (error) {
    res.status(422).send(error)
  }
})

app.delete("/delete/:id", (req, res)=>{
  try {
    const id = Number(req.params.id)
    var index: any;
    users.filter((user:any)=>{
      if(user.id === id){
        index = users.indexOf(user);
      }
    })
    users.splice(index, index + 1)
    res.end()
  } catch (error) {
    res.status(422).send(error)
  }
})

const path = require('path');
const server = require('express');

app.use(server.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
