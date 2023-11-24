import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/index' className="nav-link active">Usuarios</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/index' className="nav-link">Listar</Link>
            </li>
            <li className="nav-item">
              <Link to='/crear' className="nav-link">Crear</Link>
            </li>
            <li className="nav-item">
              <Link to='/editar' className="nav-link disabled">Editar</Link>
            </li>
            <li className="nav-item">
              <Link to='/eliminar' className="nav-link disabled">Eliminar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar