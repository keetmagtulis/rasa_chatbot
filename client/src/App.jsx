import './styles/App.css'
import {BrowserRouter} from 'react-router-dom'

import Home from './components/Homepage';
import Chatbot  from './components/Chatbot'


function App() {


  return (
    <>     
      <BrowserRouter>
        <Home />
        <Chatbot />
      </BrowserRouter>

    </>
  )
}

export default App
