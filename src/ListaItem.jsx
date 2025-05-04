export default function ListaItem({ tarea, onEliminar, onToggle }) {
  return (
    <li
      className={tarea.completado ? 'checked' : ''}
      onClick={() => onToggle(tarea.id)}
    >
      {tarea.texto}
      <span className="close" onClick={(e) => {
        e.stopPropagation();
        onEliminar(tarea.id);
      }}>
        X
      </span>
    </li>
  );
}
