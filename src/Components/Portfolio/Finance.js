import React from 'react'
import './css/finance.css'
import graph from './Image/graph.png'
export default function Finance() {
  return (
   <>
   
   
   <div className='pfin'>
   <div className='pftit'>
        <h1>Financial Performance</h1>
    </div>
   <div className='divide'>
        <p className='active'>Revenue Growth </p>
        <p>Profit Growth </p>
    </div>
    <div className='graph'>
        <img src={graph}/>
    </div>
    </div>
   </>
  )
}
