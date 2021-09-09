import React, { useEffect, useState } from 'react';
import { getDespesas, IDespesa } from '../utils/getdespesa';
import './App.css';

function App() {
  const [despesas, setDespesas] = useState<IDespesa[]>([]);

  useEffect(() => {
    getDespesas("2021-01").then(setDespesas)
  }, []);

  return (
    <div className="App">
      {despesas.map(item => {
        return (
          <div key={item.id}>
            <h4>{item.categoria}</h4>
          </div>
        )
      })}      
    </div>
  );
}

export default App;
