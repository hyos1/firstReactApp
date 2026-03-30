// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Button from './Button'
import './App.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue!"}/>
      <button>normalBtn</button>
    </div>

  )
}

export default App
