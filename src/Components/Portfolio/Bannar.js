import React from 'react'
import './css/Bannar.css'
import left from './Image/left.png'
import right from './Image/right.png'
import logo from './Image/logo.png'

export default function Bannar() {
  return (
    <>
    <div className='bannar'>
        <div className='ptitle'>
            <h2>Real Estate Investment Portfolio 2024</h2>
        </div>
        <div className='prow'>
            <img src={left} className='pleft'/>
            <p className='pdesc'>Seeking strategic investments to expand our portfolio.</p>
            <img src={logo} className='plogo'/>
            <p className='pdesc'>Aiming for a 20% ROI over the next three years.</p>
            <img src={right} className='pright'/>
        </div>
        <div className='pbot'>
            <p className='pbot-desc'>Century 21 was founded in 2005 with a mission to revolutionize the real estate industry by offering exceptional properties and investment opportunities. Our focus is on creating sustainable, high-quality living and working spaces.</p>
        </div>
    </div>
    </>
  )
}
