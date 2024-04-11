import React from 'react';
import ReactDOM from 'react-dom';
import MeuComponente from './MeuComponente'; // Importando o componente

// Renderizando o componente
ReactDOM.render(
  <React.StrictMode>
    <MeuComponente nome="Usuário" />
  </React.StrictMode>,
  document.getElementById('root')
);
