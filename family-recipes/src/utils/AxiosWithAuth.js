import axios from 'axios'; 

export const AxiosWithAuth = () => { 
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: "https://bw-grandmas-recipes.herokuapp.com/api", 
        headers: {
            Authorization: token
        }
    })

}
export default AxiosWithAuth;