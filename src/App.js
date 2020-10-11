import React, { useEffect } from 'react';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, [])
  return (
    <div className="App">
      My App
    </div>
  );
}

export default App;
