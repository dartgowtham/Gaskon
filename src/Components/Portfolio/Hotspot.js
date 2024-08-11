import React from 'react'
import './css/hotspot.css'

export default function Hotspot() {
  return (
        <>
            <div className='pcon'>
                <div className='ptits'>
                    <h1>Nearby Hotspots</h1>
                </div>
                
                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> Near top-rated schools, central park, shopping mall, and general hospital.</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Local Amenities</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>Midtown Plaza</p>
                        <h4 className='psub_desc'>Proximity to public transit, restaurants, and business district.</h4>
                    </div>
                </div>

                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> 5% job market growth, 2% population increase</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Economic Indicators</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>The Heights</p>
                        <h4 className='psub_desc'>$1 billion in new commercial investments</h4>
                    </div>
                </div>

                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> Upcoming subway extension near The Heights</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Future Development</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>The Heights</p>
                        <h4 className='psub_desc'>New tech hub development adjacent to Midtown Plaza</h4>
                    </div>
                </div>
            </div>
        </>
)
}
