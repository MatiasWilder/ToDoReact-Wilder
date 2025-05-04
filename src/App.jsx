import { useState } from 'react';
import IngresarTarea from './IngresarTarea';
import ListaTareas from './ListaTareas';
import './index.css';

export default function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    if (texto.trim() === '') {
      alert('No puede haber tarea sin título');
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completado: false,
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  const toggleCompletado = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completado: !t.completado } : t
      )
    );
  };

  return (
    <div className="header">
      <h2>Que tengo que hacer</h2>
      <IngresarTarea onAgregar={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        onEliminar={eliminarTarea}
        onToggle={toggleCompletado}
      />
    </div>
  );
}
