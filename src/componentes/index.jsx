import React, { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { sendRequest } from './funciones'

const ListaUsuarios = (params) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUsuarios();
  }, []);

  const getUsuarios = async () => {
    let res = await sendRequest('GET', {}, '/api/Usuarios/ListarUsuarios', '');
    //console.log(res);
    //setListUsuarios(res);
    setData(res);
    //console.log(data);
  }
  return (
    <div>
      <div className='mx-auto' style={{ width: '400px' }}>
        <h1>Lista de Usuarios</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className="col align-self-center">
            <Link to='/crear' className="btn btn-success form-control" >Crear Usuario</Link>
          </div>
        </div>
      </div>

      <br />

      <div className="container">

        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Email</th>
              <th>Edad</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody >
            {data?.map((row, i) => (
              <tr key={row.idUsuario}>
                <td>{row.idUsuario}</td>
                <td>{row.nombres}</td>
                <td>{row.correo}</td>
                <td>{row.edad}</td>
                <td>
                  <Link to={'/editar/' + row.idUsuario} className="fa fa-pencil fa-lx" ></Link>
                </td>
                <td>
                  <Link to={'/eliminar/' + row.idUsuario} className="fa fa-trash-alt fa-lx" ></Link>
                </td>
              </tr>
            ))
            }
          </tbody>

        </table>

      </div>
    </div>

  )
}

export default ListaUsuarios;