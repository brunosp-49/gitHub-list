import axios from "axios"

export const getLogin = (emailP, passwordP, setState, setSnack) =>{
    var body = {
        "email": emailP,
        "password": passwordP
    }
    axios.post("http://localhost:3001/login", body)
    .then((res)=>{
        setState(res.data)
        localStorage.setItem("token", "true")
    }).catch((err)=>{
        setSnack(true)
        setTimeout(()=> setSnack(false), 3000)
    })
}

export const getRepos = (setState) =>{
    axios.get("http://localhost:3001/get")
    .then((res)=>{
        setState(res.data)
    }).catch((err)=>{

    })
}

export const postRepo = (http) =>{
    var body = {
        "adress": http
    }
    axios.post("http://localhost:3001/new", body)
    .then((res)=>{
    }).catch((err)=>{
    })
}

export const deleteRepo = (id, setState) =>{
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then((res)=>{
        setState("")
    }).catch((err)=>{
        console.log(err)
    })
}