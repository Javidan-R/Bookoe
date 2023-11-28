import axios from 'axios';

const HTTP = axios.create({
    baseURL: "http://localhost:5173/",
})

export const GETAPIData = (url)=>{
    return HTTP.get(url);
}

export const POSTAPIData = (url , data)=>{
    return HTTP.post(url ,data);
}
export const DeleteAPIData = (url , id)=>{
    return HTTP.delete(`${url}/${id}`);
}
export const PUTAPIData = (url,data ,id)=>{
    return HTTP.put(`${url}/${id}` ,data);
}
