import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <figure className='border rounded-md mx-auto mt-4 shadow-md w-80 h-dvh overflow-hidden relative flex '>
        <figcaption className='absolute '>
          <h1>The creative crew</h1>
          <h3>WHO WE ARE</h3>
          <p>We are teeam of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
          <div className='grid gap-4 grid-cols-2 justify-items-center'>
            <div>
              <div>PRODUCT OWNER
                <img src="./public/photos/photo1.png" alt="" className='object-cover w-32 pt-1[writing-mode:vertical-lr]' />Bill Mahoney
              </div>
            </div>
            <div>
              <img src="./public/photos/photo2.png" alt="" className='object-cover w-32 pt-1 mt-16' />Saba Cabrera
            </div>
            <div>
              <img src="../public/photos/photo3.png" alt="" className='object-cover w-32 pt-1' />Shae Le
            </div>
            <div>
              <img src="../public/photos/photo4.png" alt="" className='object-cover w-32 pt-1 mt-16' /> Skylah Lu
            </div>
            <div>
              <img src="../public/photos/photo5.png" alt="" className='object-cover w-32 pt-1' /> Griff Richards
            </div>
            <div>
              <img src="../public/photos/photo6.png" alt="" className='object-cover w-32 pt-1 mt-16' /> Stan john
            </div>
          </div>
        </figcaption>
      </figure>
    </>
  )
}

export default App
