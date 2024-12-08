import React from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner';
import AvailableSelected from './Components/Available and Selected Btns/AvailableSelected';
import Players from './Components/Players/Players';




function App() {
  

  return (
    < div className=''>
       
       <NavBar></NavBar>
       <Banner></Banner>
       <AvailableSelected></AvailableSelected>
       <Players></Players>
    
    </div>
  )
}

export default App
