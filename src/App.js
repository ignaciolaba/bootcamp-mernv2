import { BrowserRouter } from 'react-router-dom';
import { ApiAxiosPokemon } from './components/API_pokemon_axios/ApiAxiosPokemon';
import PersonalCard from './components/apoyalo/PersonCard';
import { Compilado } from './components/Compilado';
import { ListaDeQuehaceres } from './components/lista_quehaceres/ListaDeQuehaceres';
import { MasFormularios } from './components/mas_formularios/MasFormularios';
import { AppRoutes } from './router/AppRoutes';
import './static/css/App.css';


function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    
    
  );
}

export default App;
