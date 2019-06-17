import axios from 'axios';

export const register = users => {
   let bodyFormData = {
        fullName: users.fullName,
        email: users.email,
        password: users.password,
    }
    console.log('dfsgfds');
    return axios({
        method: 'post',
        url: 'http://localhost:3000/api/register',
        data: bodyFormData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then( 
            (response) => { console.log("registered") },
            (error) => { console.log(error) }
        );
}







export const login = users=> {
    console.log("axios");
    return axios
        .post('http://localhost:3000/api/login', {
            email: users.email,
            password: users.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

