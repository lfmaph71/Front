import axios from "axios";
import Swal from "sweetalert2";


export const alerta = (msg,icon) =>{
    Swal.fire({title:msg, icon:icon,buttonsStyling:true});
}

export const sendRequest = async(method,params,url,redir='')=>{
    let res;
    await axios({
        method:method,
        url:url,
        data:params
    }).then(Response=>{
        res = Response.data;
        //console.log(res);
    }).catch((errors)=>{
        let desc;
        res = errors.Response.data,
        errors.Response.data.errors.map((e)=>{desc = desc + ' ' + e})
        alerta(desc,'error')
    })
    return res;
}

export default alerta;