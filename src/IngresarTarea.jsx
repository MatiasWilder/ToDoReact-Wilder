import { useState } from 'react';

export default function IngresarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const manejarCambio = (e) => setTexto(e.target.value);

  const manejarSubmit = () => {
    onAgregar(texto);
    setTexto('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="Ingresa la tarea aquí"
        value={texto}
        onChange={manejarCambio}
      />
      <span onClick={manejarSubmit} className="btn">
        Agregar
      </span>
    </>
  );
}
