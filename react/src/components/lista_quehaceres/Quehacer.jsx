import React from 'react'

export const Quehacer = (props) => {
    const {quehacer, setLista, index, lista} = props

    const onSubmit = (e) => {

        e.preventDefault()

       
        const nuevaLista = () => lista.filter((quehacer) => lista.indexOf(quehacer) !== index )
    

        setLista(nuevaLista)
    }

    const onInputChange = e => {
        lista[index].completa = !lista[index].completa;
        setLista([...lista])
    }
    
  return (
          
        <div className="quehacer" key={index}>
            <h4 style={{textDecorationLine: quehacer.completa ? 'line-through' : 'none'}} >{quehacer.name} </h4>
            
                <input type="hidden" name="false_event" />
                <label>{quehacer.completa ? '' : 'completar'}</label>
                <input type="checkbox" onChange={onInputChange} checked={quehacer.completa} />
                {quehacer.completa ? <button onClick={onSubmit}>borrar</button> : ""}
           
        </div>
    )  
}
