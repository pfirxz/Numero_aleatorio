import React from 'react';
import NumeroAleatorio from './componentes/NumeroAleatorio';

function App() {
  return (
    <div className="App">
      <NumeroAleatorio Min={1} Max={100} />
    </div>
  );
}

export default App;
