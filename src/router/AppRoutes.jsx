import { Route, Routes } from "react-router-dom"
import { ApiAxiosPokemon } from "../components/API_pokemon_axios/ApiAxiosPokemon"
import { Compilado } from "../components/Compilado"
import { ListaDeQuehaceres } from "../components/lista_quehaceres/ListaDeQuehaceres"
import { LukeApiWalker } from "../components/LukeApiWalker/LukeApiWalker"
import { MasFormularios } from "../components/mas_formularios/MasFormularios"
import { Navbar } from "../components/Navbar"

export const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Compilado />} />
          <Route path="/lukeapiwalker" element={<LukeApiWalker />} />
          <Route path="/lukeapiwalker/:id" element={<LukeApiWalker />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path='/apipokemonaxios' element={<ApiAxiosPokemon />} />
          <Route path='/listadequehaceres' element={<ListaDeQuehaceres />} />
          <Route path='/masformularios' element={<MasFormularios />} />
        </Routes>
    </div>
  )
}
