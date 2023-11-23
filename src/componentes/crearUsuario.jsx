import React, { useState } from 'react'
import { sendRequest } from './funciones'
import { useNavigate, Link } from 'react-router-dom';

const crearUsuario = () => {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');

  const grabar = async () => {
    let res = await sendRequest("POST", { nombres: nombres, correo: correo, edad: edad }, '/api/Usuarios/CrearUsuarios', '');
    window.location.href = '/index'
  }

  return (
    <div>
      <div className='mx-auto' style={{ width: '400px' }}>
        <h1>Crear Usuarios</h1>
      </div>
      <br />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <label className="form-label">Nombres</label>
            <input className="form-control" type="text" id='txtNombre' value={nombres}
              onChange={(e) => setNombres(e.target.value)} />
          </div>
          <div class="col-4">
            <label className="form-label">Correo Electronico</label>
            <input class="form-control" type="email" id='txtCorreo' value={correo}
              onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <div class="col-4">
            <label class="form-label">Edad</label>
            <input class="form-control" type="number" id='txtEdad' value={edad}
              onChange={(e) => setEdad(e.target.value)} />
          </div>
        </div>
        <br />
        <div class="mb-3">
          <Link to='/index' className="btn btn-success" onClick={() => grabar()}>Guardar</Link>
          <Link to='/index' className="btn btn-secondary m-2" >Regresar</Link>
        </div>
      </div>
    </div>
  )
}

export default crearUsuario