
import './App.css'
import {  } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div className='main-conatiner'>
      <div className='sidebar-container'>
        <div className='logo-container'>
        <h1 className='logo'>coconut</h1>
        </div>
        <div>

        </div>
        
      </div>
      <div className='page-container'>
        <div className='navbar-container'>
          <div>
            <span className='icon-span'>
        

            <FontAwesomeIcon className='iconHB' icon="fa-solid fa-bars" />

            </span>
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
        <div className='body-container'>
          body
        </div>
      </div>
    </div>
  )
}

export default App
