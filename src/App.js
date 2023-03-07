import PersonalCard from './components/apoyalo/PersonCard';
import { ListaDeQuehaceres } from './components/lista_quehaceres/ListaDeQuehaceres';
import { MasFormularios } from './components/mas_formularios/MasFormularios';
import './static/css/App.css';


function App() {
  return (
    <div className="bootcamp-mern">
        <h1>Bootcamp MERN</h1>
      <div className="apoyalo">
          <h2>Apoyalo</h2>
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

    </div>
      
  );
}

export default App;
