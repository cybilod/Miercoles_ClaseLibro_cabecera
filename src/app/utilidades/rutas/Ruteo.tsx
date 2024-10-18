import { Route, Routes } from "react-router-dom";

import { Acerca } from "../../componentes/otros/Acerca";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { LibroAdmin } from "../../componentes/libros/LibroAdmin";
import { LibroCrear } from "../../componentes/libros/LibroCrear";
import { LibroListar } from "../../componentes/libros/LibroListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
import { LibroActualizar } from "../../componentes/libros/LibroActualizar";
import { LibroEditorial } from "../../componentes/libros/Editoriales";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/libcre" element={<LibroCrear />} />
      <Route path="/liblis" element={<LibroListar />} />
      <Route path="/libadm" element={<LibroAdmin />} />

      <Route path="/libact/:codigo" element={<LibroActualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />

      <Route path="-" element={<LibroEditorial />} />
    </Routes>
  );
};
