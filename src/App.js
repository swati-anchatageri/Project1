
import profile from './user.png';
import email from './email.png';
import pass from './pass.png';
// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'; 
import Home from "./components/home.js";
import './App.css';
// import Main from './components/main.js';
// import Main2 from './components/main2.js';
function App() {
  //let navigate = useNavigate(()=>{return(<Home/>)});  
  return (  
    <div className="main">
    {/* <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router> */}
    
      <div className='sub-main'>
        <div>
          <div className='imgs'>
            <div className='container-img'>
              <img src={profile} alt="profile" className='profile'/>
            </div>

          </div>
          <div>
            <h1>Sign In</h1>
            <div>
              <img src={email} alt="email" className='email'/>
              <input type="text" placeholder='User Name' className='name'/>
          </div>
          <div className='space'>
          <img src={pass} alt="password" className='email'/>
          <input type="password" placeholder='********' className='name'/>
          </div>
          <div className='submit'>
          {/* <button onClick={() => {navigate("/home")}}> {" "}Sign In</button> */}
          <button name="submit" id="submit" onclick={<link to="/home" element={<Home />} />} >sign in</button>
          </div>
          {/* <div>
            <p className='link'>
              <a href='#'>Forgot password</a> or <a href='#'>Sign Up</a>
            </p>
          </div> */}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
