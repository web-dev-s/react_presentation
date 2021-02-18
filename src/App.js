import logo from './logo.svg';
import './App.css';

import MyComponent from './PresentationComponents/AllHooks';


function App() {
  return (
    <div className="App">
      <MyComponent data={{ string: 'function based', array: ['first entry', 'second entry', 'third entry'] }} />
      <img src={logo} className="App-logo" alt="logo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> */}
    </div>
  );
}

export default App;
