import axios from "axios"

export const getList =() => {
    return axios
        .get("http://localhost:3000/apit/tasks",{
            headers:{"Content-Type":"application/json"}
        })
        .then(res => {
            return res.data;
        })
}

export const addToList = term => {
    return axios
        .post("http://localhost:3000/apit/task",
        {title:term},
        {
            headers:{"Content-Type":"application/json"}
        })
        .then(res => {
            console.log(res)
        })
}

export const deleteItem = term => {
    console.log(term);
     axios
        .delete(`http://localhost:3000/apit/tasks/${term}`,
        {
            headers:{"Content-Type":"application/json"}
        })
        .then(res => {
            console.log(res);
        })
        .catch ((error) =>{
            console.log(error);
        })
}
export const updateItem = (term,id) => {
    console.log(term,id);
    return axios
        .put(`http://localhost:3000/apit/task/${id}`,
        {title:term},
        {
            headers:{"Content-Type":"application/json"}
        })
        .then(res => {
            console.log(res)
        })
        .catch((error)=>{
            console.log("ERROR");
        })
}