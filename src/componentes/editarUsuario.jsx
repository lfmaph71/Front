import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sendRequest } from './funciones';

const editarUsuario = () => {
  let { idUsuario } = useParams();
  var apiuse = [];
  const[nombreUsuario,setNombreUsuario] = useState("");
  const[correoUsuario,setCorreoUsuario] =useState('');
  const[edadUsuario,setEdadUsuario] = useState(0);

  useEffect(() => {
    getUsuarios();
  }, []);
  const getUsuarios = async () => {
    const res = await sendRequest('GET', {}, `/api/Usuarios/ListarUsuariosId/${idUsuario}`, '');
    await llenarCampos(res);
  }
  const llenarCampos = async (arr)=>{
    setNombreUsuario(arr.nombres);
    setCorreoUsuario(arr.correo);
    setEdadUsuario(arr.edad);
  }
  const grabar = async () => {
    let res = await sendRequest("POST", { idUsuario:idUsuario , nombres: nombreUsuario, correo: correoUsuario, edad: edadUsuario }, '/api/Usuarios/EditarUsuarios', '');
    window.location.href = '/index'
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
            <input className="form-control" type="text" id='txtNombre' value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)} required />
          </div>
          <div className="col-4">
            <label className="form-label">Correo Electronico</label>
            <input className="form-control" type="email" id='txtCorreo' value={correoUsuario}
              onChange={(e) => setCorreoUsuario(e.target.value)} />
          </div>
          <div class="col-4">
            <label className="form-label">Edad</label>
            <input className="form-control" type="number" id='txtEdad' value={edadUsuario}
              onChange={(e) => setEdadUsuario(e.target.value)} />
          </div>
        </div>
        <br />
        <div className="mb-3">
          <Link className="btn btn-success" onClick={() => grabar()} >Guardar</Link>
          <Link to={'/index'} className="btn btn-secondary m-2">Regresar</Link>
        </div>
      </div>

    </div>
  )
}

export default editarUsuario