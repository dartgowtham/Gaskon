import React from 'react'
import Bannar from './Bannar'
import Key_Highlights from './Key_Highlights.js'
import Gallery from './Gallery.js'
import Ad from './Ad.js'
import Hotspot from './Hotspot.js'
import Finance from './Finance.js'
import Fy from './Fy_Bannar.js'
import Pcard from './Pcard.js'
import Plan from './Plan.js'
import Edge from './Edge.js'
import Mid_Bannar from './Mid_bannar.js'
export default function Portfolio() {
  return (
    <div>
        <Bannar />
        <Key_Highlights/>
        <Gallery/>
        <Ad/>
        <Hotspot/>
        <Finance/>
        <Fy/>
        <Pcard/>
        <Plan/>
        <Edge/>
        <Mid_Bannar/>
        </div>
  )
}
