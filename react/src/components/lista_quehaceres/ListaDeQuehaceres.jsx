import React from 'react'
import { useState } from 'react'
import { Input } from './Input'
import { Quehacer } from './Quehacer'

export const ListaDeQuehaceres = () => {
    

    const [lista, setLista] = useState([])
    const queHaceres = lista

  return (
    <div className='quehacer_container'>
        <Input lista={lista} setLista={setLista} />  
        {queHaceres.map((quehacer, i) => (
          <li key={i}>
               <Quehacer quehacer={quehacer} setLista={setLista} index={i} lista={lista}/>
          </li>
           
        ))}
            
    </div>
  )
}
