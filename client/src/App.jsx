import './App.css';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLayoutOpen = {  width: "20%" };

  const sidebarLayoutClose = { width: "4%" };

  const handleSidebarChange = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='main-conatiner'>
      <div className='sidebar-container' style={sidebarOpen ? sidebarLayoutClose  : sidebarLayoutOpen}>
        <div className='logo-container'>

        { sidebarOpen ?
          
          <img className='logoCo' src="/coconut.png" alt="logo" />

          :

          <h1 className='logo'>coconut</h1>

        }
          
        </div>
        <div></div>
      </div>
      <div className='page-container'>
        <div className='navbar-container'>
          <div className='hb-container'>
            <img onClick={handleSidebarChange} className='imgHB' src="/hamburger.png" alt="img" />
          </div>
          <div className='ul-container'>
            <ul className='ul'>
              <li className="li-items">Home</li>
              <li className="li-items">About</li>
              <li className="li-items">Blog</li>
              <li className="li-items">Careers</li>
              <li className="li-items">Login</li>
            </ul>
          </div>
        </div>
        <div className='body-container'>body</div>
      </div>
    </div>
  );
}

export default App;
