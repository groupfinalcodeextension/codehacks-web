import React from 'react'

export default function Intro() {
  return (
    <div style={{ height : '70vh', backgroundColor : '#1a2b33', display : 'flex', alignItems : 'center', justifyContent : 'center' }}>
      <div style={{ display : 'flex', justifyContent : 'space-between', color : '#f8bc45', width : '80%'}} id="intro">
        <div style={{ width : 400, }}>
          <h2>What is Code Hacks?</h2> 
          <ul>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
          </ul>
        </div>
        <div style={{ width : 400 }}>
          <h2>Why Code Hacks?</h2> 
          <ul>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
            <li><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
