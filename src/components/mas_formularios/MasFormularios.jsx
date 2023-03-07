import React from 'react'
import { useState } from 'react'

export const MasFormularios = () => {

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        password2: ""
    })

    const {nombre, apellido, email, password, password2} = state


    

    const onInputChange = (e) => {
        setState(
            {
                ...state,
                [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

  return (
    <div className='form_container'>
        
        <form onSubmit={onSubmit}>
            <div className="titulo_formulario">
                <h1>Más Formularios</h1>
            </div>
            <div className="input_field">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" onChange={onInputChange} value={nombre} name="nombre" id="nombre" />
            </div>
            <h3>
                {
                nombre.length <= 2 && nombre.length > 0? "Nombre debe tener más de dos caracteres" : ""
                }
            </h3>
            <div className="input_field">
                <label htmlFor="apellido">Apellido</label>
                <input type="text" onChange={onInputChange} value={apellido} name="apellido" id="apellido" />
            </div>
            <h3>
                {
                apellido.length <= 2 && apellido.length > 0 ? "Apellido debe tener más de dos caracteres" : ""
                }
            </h3>
            <div className="input_field">
                <label htmlFor="email">email</label>
                <input type="text" onChange={onInputChange} value={email} name="email" id="email" />
            </div>
            <h3>
                {
                email.length <= 2 && email.length > 0 ? "Email debe tener más de dos caracteres" : ""
                }
            </h3>
            <div className="input_field">
                <label htmlFor="password">Contraseña</label>
                <input type="password" onChange={onInputChange} value={password} name="password" id="password" />
            </div>
            <h3>
                {
                password.length <= 8 && password.length > 0 ? "Contraseña debe tener más de ocho caracteres" : ""
                }
            </h3>
            <h3>{
                password !== password2 && password2.length >0 ? "Contraseñas deben coincidir" : ""
                }
            </h3>
            <div className="input_field">
                <label htmlFor="password2">Contraseña</label>
                <input type="password" onChange={onInputChange} value={password2} name="password2" id="password2" />
            </div>
            <div className="input_field_btn">
                <input className='btn_submit' type="submit" value="Registrar" />
            </div>
        </form>
    </div>
  )
}
