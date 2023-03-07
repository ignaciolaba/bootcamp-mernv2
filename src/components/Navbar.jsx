import React from 'react'

export const Navbar = () => {
  return (
    <div className='row navbar'>
        <div className="col-7">
            <h3>Proyectos BOOTCAMP MERN ILU</h3>
        </div>
        <div className="col-5 dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Proyectos
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Compilado</a></li>
                <li><a className="dropdown-item" href="/lukeapiwalker">Luke Api Walker</a></li>
                <li><a className="dropdown-item" href="/apipokemonaxios">Api Pokemon Axios</a></li>
                <li><a className="dropdown-item" href="/listadequehaceres">Lista de Quehaceres</a></li>
                <li><a className="dropdown-item" href="/masformularios">Más Formularios</a></li>
            </ul>
        </div>
    </div>
  )
}
