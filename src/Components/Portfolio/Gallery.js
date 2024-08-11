
import React from 'react'
import './css/gallery.css'
import Ga1 from './Image/ga1.png'
import Ga2 from './Image/ga2.png'
import Ga3 from './Image/ga3.png'
import Ga4 from './Image/ga4.png'

export default function Gallery() {
  return (
    <>
    <div className='pgal'>
        <div className='pitem1'>
            <div className='ptit'>
                <h1>Gallery of Excellence</h1>
                <p>Witness the unique features and superior quality of our developments, showcasing both interiors and exteriors.</p>
            </div>
            <img src={Ga1}/>
        </div>
        <div className='pitem'>
            <img src={Ga3}/>
        </div>
        <div className='pitem'>
            <img src={Ga4}/>
        </div>
        <div className='pitem'>
            <img src={Ga2} className='spimg'/>
        </div>
    </div>
    </>
  )
}
