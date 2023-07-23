import { useState } from 'react'
import './App.css'
import Body from './Components/Body Section/Body'
import Sidebar from './Components/SideBar Section/sidebar'

function App() {

  return (
      <div className='container'>
        <Sidebar/>
        <Body/>
      </div>
  )
}

export default App
