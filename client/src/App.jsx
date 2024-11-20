import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import Home from './components/Homepage';
import NavBar from './components/NavBar'
import Customize from './components/Customize'
import Shop from './components/Shop'
import ContactUs from './components/ContactUs'

function App() {


  return (
    <>     
      
      <BrowserRouter>
        <NavBar />

      
        <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path="/customize" element ={<Customize />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<ContactUs/>} />
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
