import axios from 'axios';


const HTTP = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
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
