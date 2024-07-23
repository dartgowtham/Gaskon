import React from 'react'
import call from '../../Images/social/call.png'
import email from '../../Images/social/email.png'
import loco from '../../Images/social/loco.png'

import './css/contactus.css'

export default function Contact_us() {
  return (
    <div className='con_main'>
        <div className='con_fo'>
        <div className='tope'>
          <div  className='contacts'>
         <li><img src={call} alt='df' style={{width:"18px"}}/><a>817-880-1304</a></li> 
            <li><img src={email} alt='df' style={{width:"18px"}}/><a>gaskon.io</a></li>
            <li><img src={loco} alt='df' style={{width:"18px"}}/>2972 Westheimer Rd. Santa Ana,Illinois 85486</li>
          </div>
          <div className='maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.954858973381!2d-97.1585292245336!3d32.92579087360186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd449939d1cad%3A0x45f399787dcf7cea!2s1203%20S%20White%20Chapel%20Blvd%2C%20Southlake%2C%20TX%2076092%2C%20USA!5e0!3m2!1sen!2sin!4v1721754208246!5m2!1sen!2sin"
                   width="600" height="450" 
                   style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
          </div>
          <div className='Contact_form'>
            <h1>Contact Us</h1>
            <p>This content is password-protected. Please verify with a password to unlock the content.</p>
            <div className='form'>
          <input type='text' className='textbox' placeholder='Name'/>
          <br/>
          
          <input type='text' className='textbox' placeholder='Email'/>
          <br/>
          <input type='text' className='msg' placeholder='Message'/>  
          <br/>
          <button className='con_btn'>Contact</button>
            </div>
          </div>
          </div>
       
    </div>
  )
}
