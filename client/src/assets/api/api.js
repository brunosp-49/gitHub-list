import axios from "axios"

export const getLogin = (emailP, passwordP, setState, setSnack) =>{
    var body = {
        "email": emailP,
        "password": passwordP
    }
    axios.post("https://github-list09.herokuapp.com/login", body)
    .then((res)=>{
        setState(res.data)
        localStorage.setItem("token", "true")
    }).catch((err)=>{
        setSnack(true)
        setTimeout(()=> setSnack(false), 3000)
    })
}

export const getRepos = (setState) =>{
    axios.get("https://github-list09.herokuapp.com/get")
    .then((res)=>{
        setState(res.data)
    }).catch((err)=>{

    })
}

export const postRepo = (http) =>{
    var body = {
        "adress": http
    }
    axios.post("https://github-list09.herokuapp.com/new", body)
    .then((res)=>{
    }).catch((err)=>{
    })
}

export const deleteRepo = (id, setState) =>{
    axios.delete(`https://github-list09.herokuapp.com/delete/${id}`)
    .then((res)=>{
        setState("")
    }).catch((err)=>{
        console.log(err)
    })
}