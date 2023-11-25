import React,{useEffect, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import alerta, { sendRequest } from './funciones';

const eliminarUsuario = () => {
  let {idUsuario} = useParams();

  useEffect(()=>{
    eliminarUsuario();
  },[])

const eliminarUsuario = async()=>{
  alerta("Barrar Usuario","warning");
  let res = await sendRequest("GET",{},`/api/Usuarios/EliminarUsuarios/${idUsuario}`,'');
  window.location.href = '/index';
}

  return (
    <div>eliminarUsuario</div>
  )
}

export default eliminarUsuario