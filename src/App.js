import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from "./components/layout/AddBtn"
import AddLogModal from "./components/logs/AddLogModal"
import EditLogModal from "./components/logs/EditLogModal"
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css/dist/css/materialize.min.css';
import './App.css';

const App = () => {
  
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
    
  })

  return (
    <Fragment>
      <SearchBar />
      <div>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <Logs />
      </div>
    </Fragment>   
  );
}

export default App;
