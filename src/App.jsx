import React, { useState } from 'react';
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner';
import AvailableSelected from './Components/Available and Selected Btns/AvailableSelected';
import Players from './Components/Players/Players';




function App() {
  const[credit , setCredit] = useState(0);
  const creditUpdate = () => setCredit(credit + 1000);
  

  return (
    < div className=''>
       
       <NavBar credit={credit}></NavBar>
       <Banner creditUpdate={creditUpdate}></Banner>
       <AvailableSelected></AvailableSelected>
       <Players></Players>

    </div>
  )
}

export default App
