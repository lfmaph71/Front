import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './componentes/navbar';
import IndexUsuario from './componentes/index';
import CrearUsuario from './componentes/crearUsuario';
import EditarUsuario from './componentes/editarUsuario';
import EliminarUsuario from './componentes/eliminarUsuario';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
          <Route path="/index" element={<IndexUsuario />} />
          <Route path="/crear" element={<CrearUsuario />} />
          <Route path="/editar/:idUsuario" element={<EditarUsuario />} />
          <Route path="/eliminar/:idUsuario" element={<EliminarUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
