import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './components/Homepage';
import Chatbot  from './components/Chatbot'
import NavBar from './components/NavBar'
import Customize from './components/Customize'

function App() {


  return (
    <>     
      
      <BrowserRouter>
        <NavBar />
        <Home />
        <Chatbot />

      
        <Routes>
        <Route path="/customize" element ={<Customize />}/>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
