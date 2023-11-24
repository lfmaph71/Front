import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sendRequest } from './funciones';

const editarUsuario = () => {
  let { idUsuario } = useParams();
  //console.log('params:',idUsuario);
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [datos,setDatos] = useState(null);

  useEffect(()=>{
    getUsuarios();
  },[]);

  const getUsuarios = async () => {
    let res = await sendRequest('GET', {}, `/api/Usuarios/ListarUsuariosId/${idUsuario}`, '')
    setDatos(res)
    console.log(res)
    console.log(datos)
  }

  return (
    <div>
      <div className='mx-auto' style={{ width: '400px' }}>
         <h1>Editar Usuarios</h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <label className="form-label">Nombres</label>
            <input className="form-control" type="text" id='txtNombre' value={nombres}
              onChange={(e) => setNombres(e.target.value)} />
          </div>
          <div className="col-4">
            <label className="form-label">Correo Electronico</label>
            <input className="form-control" type="email" id='txtCorreo' value={correo}
              onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <div class="col-4">
            <label className="form-label">Edad</label>
            <input className="form-control" type="number" id='txtEdad' value={edad}
              onChange={(e) => setEdad(e.target.value)} />
          </div>
        </div>
        <br />
        <div className="mb-3">
          <button className="btn btn-success" type="button"  >Guardar</button>
          <button className="btn btn-secondary m-2">Regresar</button>
        </div>
      </div>

    </div>
  )
}

export default editarUsuario