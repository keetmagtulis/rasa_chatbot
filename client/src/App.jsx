import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Home from './components/Homepage';
import Chatbot  from './components/Chatbot'
import NavBar from './components/NavBar'
import Customize from './components/Customize'
import Shop from './components/Shop'

function App() {


  return (
    <>     
      
      <BrowserRouter>
        <NavBar />
        <Chatbot />

      
        <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path="/customize" element ={<Customize />}/>
        <Route path="/shop" element={<Shop />}/>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
