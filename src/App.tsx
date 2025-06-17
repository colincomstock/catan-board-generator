import { useState } from 'react'
import generateBoard from './layoutCalculator'
import './App.css'

function App() {
  generateBoard()

  return (
    <>
      <div>
        <h1>App Component</h1>
      </div>
    </>
  )
}

export default App
