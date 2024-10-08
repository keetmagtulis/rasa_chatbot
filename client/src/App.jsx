import './App.css'
import {BrowserRouter} from 'react-router-dom'

import Home from './components/Homepage';
import Chatbot  from './components/Chatbot'
import NavBar from './components/NavBar'

function App() {


  return (
    <>     
      
      <BrowserRouter>
        <NavBar />
        <Home />
        <Chatbot />
      </BrowserRouter>

    </>
  )
}

export default App
