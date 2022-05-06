import profile from './user.png';
import email from './email.png';
import pass from './pass.png'
import './App.css';
// import Main from './components/main.js';
// import Main2 from './components/main2.js';
function App() {  
  return (
    <div className="main">
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
          <input type="password" placeholder='Password' className='name'/>
          </div>
          <div className='submit'>
          <button>Sign In</button>
          </div>
          {/* <div>
            <p className='link'>
              <a>Forgot password</a> or <a> Sign Up</a>
            </p>
          </div> */}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
