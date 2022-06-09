"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
const user = {
    email: "adm@gmail.com",
    password: "adm123"
};
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
app.get("/get", (req, res) => {
    res.status(200).send(data_1.users);
});
app.post("/login", (req, res) => {
    try {
        const { email, password } = req.body;
        if (email != user.email) {
            console.log(typeof email);
            throw new Error("Erro de email");
        }
        else if (password != user.password) {
            throw new Error("Erro de senha");
        }
        else {
            res.send("login");
        }
    }
    catch (error) {
        res.status(422).send(error);
    }
});
app.post("/new", (req, res) => {
    try {
        var { adress } = req.body;
        console.log(typeof adress);
        var adressSplited = adress.split("/");
        // 3(username), 4(repo) 
        var id = Math.floor(Math.random() * 65);
        var validation = data_1.users.find((user) => {
            if (user.html_url === adress) {
                throw new Error("Repositório já cadastrado");
            }
        });
        axios_1.default.get(`https://api.github.com/repos/${adressSplited[3]}/${adressSplited[4]}`)
            .then((res) => {
            data_1.users.push({ id: id, name: adressSplited[4], login: adressSplited[3], html_url: adress });
        }).catch((err) => {
        });
        res.send("Usuário adicionado com sucesso");
    }
    catch (error) {
        res.status(422).send(error);
    }
});
app.delete("/delete/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        var index;
        data_1.users.filter((user) => {
            if (user.id === id) {
                index = data_1.users.indexOf(user);
            }
        });
        data_1.users.splice(index, index + 1);
        res.end();
    }
    catch (error) {
        res.status(422).send(error);
    }
});
const path = require('path');
const server = require('express');
app.use(server.static(path.resolve(__dirname, '../../client/public')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/public', 'index.html'));
});
