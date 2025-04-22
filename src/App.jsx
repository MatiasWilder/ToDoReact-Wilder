import { useState } from 'react';
import IngresarTarea from "./IngresarTarea.jsx"
import ListaTareas from "./ListaTareas.jsx"
import TareaRapida from './TareaRapida.jsx';

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <>
      <ListaTareas todolist={toDo} añadidor={setToDo}/> {}
      <IngresarTarea todolist={toDo} añadidor={setToDo}/>
      <TareaRapida todolist={toDo}/>
    </>
  )
}

export default App