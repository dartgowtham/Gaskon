import React from 'react'
import cp1 from './Image/cpcard1.png'
import cp2 from './Image/cpcard2.png'
import loc from './Image/loc.png'
import dart from './Image/dart.png'
import './css/portfolio.css'

export default function Ad() {
  return (
    <>
     <div className='cur_pro'>
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
        </div>
    </>
  )
}
