import { useEffect, useState } from 'react'

export const Menu = (props) => {

      const [busqueda, setBusqueda] = useState({
        tipo: '',
        id: ''
      })
      const [titulo, setTitulo] = useState('')
      const [data, setData] = useState([])

      const onSubmit = e => {
        e.preventDefault()
        setBusqueda({
          tipo: e.target.tipo.value,
          id: e.target.id.value
        })

      }

      const {id} = props.id
      console.log(id)

      useEffect (() => {
        let url = `https://swapi.dev/api/${busqueda.tipo}/${busqueda.id}`
        const fetchApi = async () => {
          let swapi = await fetch(url)
          const data = await swapi.json()
          setData(data)
        }
        fetchApi()
        setTitulo(busqueda.tipo.toLocaleUpperCase())
        
      }, [busqueda])

      let entries = Object.entries(data)
      
      console.log(data)
      console.log(data.name)


  return (
    <div className=''>
      <div className="form_container row">
        <form className="swapi" onSubmit={onSubmit}>
          <div className="select_container col-6">
             <label htmlFor="dropdown_menu">Busca por</label>
            <select name="tipo" id="dropdown_menu">
                <option defaultValue="people" value="people">Personajes</option>
                <option value="planets">Planetas</option>
                <option value="films">Películas</option>
                <option value="species">Especies</option>
                <option value="vehicles">Vehículos</option>
                <option value="starships">Naves</option>
            </select>
          </div>
          <div className="text_container col-6">
            <label htmlFor="id">id</label>
            <input type="text" name="id" id={id} placeholder={id}/>
            <input type="submit" value="Buscar" />
          </div>
        </form>
      </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>Buscador de Star Wars</h3>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{titulo}</h4>
                            {data.name !== undefined ? 
                            <ul className='swapi_list'>
                                {entries.map( ([key, value]) => {
                                  key = key.replace('_', ' ')
                                  if (key === "detail" && value === "Not found") {
                                    value = "Estos no son los droides que está buscando"
                                    key = "Error"
                                  } else value = value
                                    return <li key={key}>{key.toLocaleUpperCase()}: {value}</li>
                                })}
                            </ul>
                            : <p>Busca por un personaje, planeta, película, especie, vehículo o nave</p>
                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
