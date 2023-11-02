import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes} from 'react-router-dom' 
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
     <Route path="/"Component={Home}></Route>
     <Route path="/about"Component={About}></Route>
     <Route path="/contact"Component={Contact}></Route>
     <Route path="services/"Component={Services}></Route>
     </Routes>
   </div>
   
  )
}

export default App