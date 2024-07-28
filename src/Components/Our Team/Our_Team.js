import React from 'react'
import arrow from '../../Images/arrow-right.png'
import dot from '../../Images/dot.png'
import mem1 from '../../Images/mem1.png'
import mem2 from '../../Images/mem2.png'
import mem3 from '../../Images/mem3.png'
import mem4 from '../../Images/mem4.png'
import mem5 from '../../Images/mem5.png'
import joins from '../../Images/joins.png'

import './css/our_team.css'

export default function Our_Team() {
  return (
    <div id="our_team">
        <div className='our_team'>
            <h1>Empower Your Vision with Our Expert Team</h1>
            <p>At our business consulting firm, we synergize expertise and innovation to empower organizations with strategic insights and tailored solutions. Our dynamic team of seasoned professionals is dedicated to driving client success through proactive problem-solving and sustainable growth strategies.</p>
            <div className='mid'>
            <button className='btn'>Get Started <img src={arrow} alt='d'/></button>
            </div>
        </div>
        <div className='grpd'>
            <div className='itme'>
               
                <p> 
                <img src={dot} alt='demo' style={{marginRight:"10px"}} className='dot'/>
                Our Leadership Team</p>
            
                <h1>Meet our Visionaries</h1>

            </div>
             <div className='iteme'>
                <img src={mem1}/>
               
            </div>

            <div className='iteme'>
            <img src={mem2}/>
                
            </div>

            <div className='iteme'>
            <img src={mem3}/>
                
            </div>

            <div className='iteme'>
            <img src={mem4}/>
                
            </div>

            <div className='iteme'>
            <img src={mem5}/>
            </div>

        </div>

        <div className='joine'>
            <div className='le'>
                <h2>Want to join our team?</h2>
                <p>Our creative team is looking for you.</p>
                <div className='mid'>
            <button className='btno'>See Career <img src={arrow} alt='d'/></button>
            </div>
            </div>
            <div className='jj'>
                <img src={joins}/>
           </div>
        </div>

        <div className='grpd'>
            <div className='itme'>
               
                <p> 
                <img src={dot} alt='demo' style={{marginRight:"10px"}} className='dot'/>
                Our Advisory Board</p>
            
                <h1>Meet our Visionaries</h1>

            </div>
             <div className='iteme'>
                <img src={mem1} className='mem'/>
               
            </div>

            <div className='iteme'>
            <img src={mem2} className='mem'/>
                
            </div>

            <div className='iteme'>
            <img src={mem3} className='mem'/>
                
            </div>

            <div className='iteme'>
            <img src={mem4} className='mem'/>
                
            </div>

            <div className='iteme'>
            <img src={mem5} className='mem'/>
            </div>

        </div>


    </div>
  )
}
