import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import getAllStarships from './components/sw-api/'

function App() {

  return (
    <div>
      <Header />
      <div>{getAllStarships()}</div>
    </div>
    
  )
}

export default App
