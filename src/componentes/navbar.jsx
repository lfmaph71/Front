import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to='/index' class="nav-link active">Usuarios</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/index' class="nav-link">Listar</Link>
            </li>
            <li class="nav-item">
              <Link to='/crear' class="nav-link">Crear</Link>
            </li>
            <li class="nav-item">
              <Link to='/editar' class="nav-link disabled">Editar</Link>
            </li>
            <li class="nav-item">
              <Link to='/eliminar' class="nav-link disabled">Eliminar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar