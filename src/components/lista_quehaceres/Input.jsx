import React, { useState } from 'react'

export const Input = (props) => {
    const {lista, setLista} = props

    const [input, setInput] = useState("")

    const onChange = e => {
        setInput(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        let tarea = {
            name: input,
            completa: false,
        }
        
        setLista([...lista, tarea])
        setInput("")
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} placeholder="Ingresa una tarea" name="tarea" value={input}/>
            <input type="submit" value="Agregar" />
        </form>
    </div>
  )
}
