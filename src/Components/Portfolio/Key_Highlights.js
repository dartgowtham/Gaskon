import React from 'react'
import icons from './Image/Vector.png'
import cp1 from './Image/cpcard1.png'
import cp2 from './Image/cpcard2.png'
import cp3 from './Image/cpcard3.png'
import cp4 from './Image/cpcard4.png'
import loc from './Image/loc.png'
import dart from './Image/dart.png'
import './css/portfolio.css'

export default function Key_Highlights() {
  return (
    <>
    <div>
    <div className='kbannar'>
        <h2>Key Highlights</h2>
        <div className='klists'>
           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>

           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>

           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>
        </div>
    </div>

    <div className='core_ver'>
        <div className='glass'>
            <h1>Core Values & Vison</h1>
            <p>UrbanNest Realty is driven by Integrity, Innovation, Excellence, and Sustainability. Our vision is to be a leader in sustainable real estate development, providing exceptional value to our investors and communities.</p>
        </div>
    </div>

    

    <div className='cur_pro'>
    <h2 className='cur_tit'>Current Properties</h2>

        <div className='crow'>
            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp1} className='cp1'/>
                    <p className='sps'>Rooftop garden, gym, swimming pool</p>
                    <p className='pos'>For sale</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Residential</p>
                    <h1 className='cpcard-title'>The Heights</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Downtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>3,000 sq. ft.</p>

                    </div>
                </div>
            </div>

            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp2} className='cp1'/>
                    <p className='sps'>Conference rooms, parking, cafeteria</p>
                    <p className='pos'>For lease</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Commercial</p>
                    <h1 className='cpcard-title'>Midtown Plaza</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Midtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>50,000 sq. ft.</p>

                    </div>
                </div>
            </div>
        </div>

    <h2 className='cur_tit'>Past Properties</h2>

        <div className='crow'>
            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp3} className='cp1'/>
                    <p className='pos'>Achieved a 25% ROI</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Successfully sold</p>
                    <h1 className='cpcard-title'>Riverfront Residences</h1>
                    <div className='plocat'>
                         
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>Testimonials</p>
                    </div>
                    <div class="pcas">
                        <p>"A great investment with excellent returns! - Annie Walker"</p>
                    </div>
                </div>
            </div>

            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp4} className='cp1'/>
                    <p className='pos'>Generated $2 million in annual revenue</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Leased within six months</p>
                    <h1 className='cpcard-title'>Green Acres Industrial Park</h1>
                    <div className='plocat'>
                        
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>Case Study</p>
                      
                    </div>
                    <div class="pcas">
                            <p>A great Efficient project management and strategic location led to rapid occupancy. </p>
                    </div>
                   </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
