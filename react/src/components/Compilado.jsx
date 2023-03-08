import { ApiAxiosPokemon } from "./API_pokemon_axios/ApiAxiosPokemon"
import PersonalCard from "./apoyalo/PersonCard"
import { ListaDeQuehaceres } from "./lista_quehaceres/ListaDeQuehaceres"
import { LukeApiWalker } from "./LukeApiWalker/LukeApiWalker"
import { MasFormularios } from "./mas_formularios/MasFormularios"


export const Compilado = () => {
  return (
    <div className="bootcamp-mern">
        <h1>Bootcamp MERN</h1>
      <div className="apoyalo">
          <h2>Apóyalo</h2>
          <PersonalCard
          firstName={"Ignacio"}
          lastName={"Labarca"}
          age={28}
          hairColor={"Negro"}
          />
          <PersonalCard
          firstName={"Pedro"}
          lastName={"Lira"}
          age={39}
          hairColor={"Azul"}
          />
          <PersonalCard
          firstName={"Juan"}
          lastName={"Lorca"}
          age={18}
          hairColor={"Gris"}
          />
          <PersonalCard
          firstName={"Jaime"}
          lastName={"Pirlo"}
          age={48}
          hairColor={"Amarillo"}
          />
          <PersonalCard
          firstName={"Alexis"}
          lastName={"Sanchez"}
          age={35}
          hairColor={"Negro"}
          />
      </div>
      <div className="mas_formularios">
          <h2>Más Formularios</h2>
          <MasFormularios />
      </div>
      <div className="lista_quehaceres">
          <h2>Lista de Quehaceres</h2>
          <ListaDeQuehaceres />
      </div>
      <div className="api_axios_pokemon">
        <h2>API Axios Pokemon</h2>
        <ApiAxiosPokemon />
      </div>
      <div className="luke_api_walker">
        <h2>API Luke Walker</h2>
        <LukeApiWalker />
      </div>
    </div>
  )
}
