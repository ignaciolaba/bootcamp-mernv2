import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ApiAxiosPokemon = () => {

    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => {
            setPokemon(response.data.results)
        })
    }




  return (
    <div>
        
        <button className='btn btn-primary' onClick={fetchPokemon}>Traer Pokemons</button>
        <ul>
            {pokemon.map((pokemon, i) => (
                <li key={i}>{pokemon.name}</li>
            ))}
        </ul>
    </div>
  )
}
