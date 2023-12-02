import { useState } from 'react'
import './App.css'
import { Button } from './components/UI/Button'
import { Input } from './components/UI/Input'

function App() {
  console.log('helloworld')

  return (
    <>
     <div>
      <h1>
        hello world
        <Random/>
        <Button/>
        <Input/>
      </h1>
     </div>
    </>
  )
}

export default App
