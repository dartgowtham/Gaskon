import React from 'react'
import About_us from './About_us'
import Contact_us from './Contact_us'
import Real from './Real'
import Client from './Client'
import Thinking from './Thinking'
import Bannar from './Bannar'


export default function Home() {
  return (
    <div>
        <Bannar/>
        <About_us/>
        <Client/>
        <Real/>
        <Thinking/>
        <Contact_us/>
    </div>
  )
}
