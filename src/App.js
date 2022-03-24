// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import FirstComponent from './components/001-components-intro/FirstComponents';
import ArticlePage from './components/002-componentHierarchy/ArticlePage';
import Manager from './components/003-props/Manager';
import ParentManager from './components/003-propsdetailed/ParentManager';
import StateManager from './components/004-state/StateManager';
import Login from './components/005-forms/Login';
import Zoo from './components/006-State-Object-Arrays/Zoo';
import Pokedex from './components/008-ExternalData/Pokedex.jsx';
import './css/App.css';

function App() {
  return (
    <div className="App">
      
      {/* <ArticlePage/>  */}

     {/* <Manager/> */}
     {/* <ParentManager/> */}
     {/* <StateManager/> */}
     {/* <Login/> */}
     {/* <Zoo/> */}
     <Pokedex/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
