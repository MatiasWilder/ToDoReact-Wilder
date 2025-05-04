import ListaItem from './ListaItem';

export default function ListaTareas({ tareas, onEliminar, onToggle }) {
  return (
    <ul id="lista">
      {tareas.map((tarea) => (
        <ListaItem
          key={tarea.id}
          tarea={tarea}
          onEliminar={onEliminar}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
