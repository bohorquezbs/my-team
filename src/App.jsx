import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <figure className='border rounded-md mx-auto mt-4 shadow-md w-60 h-96 overflow-hidden relative '>
        <figcaption className='absolute '>
          <h1>The creative crew</h1>
          <h3>WHO WE ARE</h3>
          <p>We are teeam of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
          <img src="./public/photos/photo1.png" alt="" className='w-full object-cover' />
          <img src="./public/photos/photo2.png" alt="" className='w-full object-cover' />
        </figcaption>
      </figure>
    </>
  )
}

export default App
