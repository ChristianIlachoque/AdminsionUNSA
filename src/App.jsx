import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AppRouter } from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRouter />
  )
}

export default App
