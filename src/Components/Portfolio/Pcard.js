import React from 'react'
import './css/pcard.css'
import icons from './Image/Star.png'

export default function Pcard() {
  return (
     <>
     <div className='cens'>
        <div className='pccon'>
            <div className='pccard'>
                <div className='sno'>
                    <p>01</p>
                </div>
                <div className='pcctit'>
                    <h3>New Property Acquisitions</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We are expanding our portfolio in high-demand areas with strategic acquisitions of prime properties. Our focus is on identifying locations with strong growth potential and excellent returns on investment.
                     </p>
                </div>
            </div>

            <div className='pccard' id='bb'>
                <div className='sno'>
                    <p>02</p>
                </div>
                <div className='pcctit'>
                    <h3>Infrastructure Improvements</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We aim to enhance property value through key upgrades and infrastructure improvements. By investing in essential amenities and advanced facilities, we ensure our properties remain competitive and attractive to tenants and buyers.                     </p>
                </div>
            </div>

            <div className='pccard'>
                <div className='sno'>
                    <p>03</p>
                </div>
                <div className='pcctit'>
                    <h3>Development Projects</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We are dedicated to creating sustainable residential and commercial developments. Our projects emphasize eco-friendly construction practices and innovative designs to meet the needs of modern living and working spaces.                     </p>
                </div>
            </div>
        </div>
        </div>
        <div className='sban'>
            <div className='sim'>
                <img src={icons}/>
            </div>
            <div className='scons'>
            <h2>Seeking 15% equity investment for $75 million</h2>
            <p>- 2020 Investment: $50 million yielded 25% ROI over four years -</p>
        </div>
        <div className='sim'>
                <img src={icons}/>
            </div>
        </div>
     </>
  )
}
