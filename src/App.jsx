import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Images from './components/Images'

function App() {
  return(
    <>
      <img src="../src/assets/hero2.jpg" alt="" className='kk'/>
      <img src="./src/assets/hero2.jpg" alt="" className='kk'/>
      <img src="..///src/assets/hero2.jpg" alt="" className='kk'/>
      <img src="..//src/assets/hero2.jpg" alt="" className='kk'/>
      <Images src='../src/assets/hero2.jpg'/>
      <Images src='..//src/assets/hero2.jpg'/>
      <Images src='src/assets/hero2.jpg'/>
      <Images src='./src/assets/hero2.jpg'/>
    </>
  )
}

export default App
