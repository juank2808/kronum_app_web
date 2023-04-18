import axios from "axios";
const headers = {'Access-Control-Allow-Origin': "*",'Content-Type': 'application/json'}

const login = async (data) => {
    data = JSON.stringify(data)
    const response = await axios.post('http://127.0.0.1:8000/api/v1/login',data,headers).then(res => {
        localStorage.setItem("token",res.data.access_token);
        return res.status;
    }).catch(err=>{
        console.log(err)
        return err;
    });

    return response;
    // return response;
}

export { login };