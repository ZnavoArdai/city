import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import City from './City.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div clnassName="App">
    <City/>
    </div>
  )
}

export default App
