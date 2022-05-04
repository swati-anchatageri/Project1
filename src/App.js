import logo from './logo.svg';
import pic from './pic.png';
import './App.css';
import Main from './components/main.js';
import Main2 from './components/main2.js';
function App() {  
  return (
    <div className="App">
       <h1 align="center">React development<img src={logo} className="App-logo" alt='logo'></img></h1>
       <Main />
       <Main2 />
       <img src={pic} alt='logo'></img>
    </div>
  );
}

export default App;
