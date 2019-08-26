import React, { useState } from 'react'
import headerLogo from '../images/icon.png'
import { withRouter } from 'react-router-dom'

export function Header(props) {  
  const [ buttonColor, setButtonColor ] = useState('black')
  const [ buttonColor2, setButtonColor2 ] = useState('black')

  function toDetail(){
    props.history.push({
      pathname : "/about"
    })
  }

  function toDocs(){
    props.history.push({
      pathname : "/documentation"
    })
  }

  return (
    <div style={{ backgroundColor : '#182024', height : '70vh', paddingTop : 90, textAlign : 'center' }} >
      <img src={headerLogo} alt="code hacks logo"  /> 
      <div style={{ display: 'flex', alignContent : 'center', alignItems : 'center', justifyContent : 'space-around' }}>
        <div style={{ backgroundColor : '#FFC107', width : 250, height : 50, display : 'flex', justifyContent : 'center', alignContent : 'center', alignItems : 'center', borderRadius : 10, cursor : 'pointer'}} onMouseEnter={() => {setButtonColor2('white')}} onMouseLeave={() => {setButtonColor2('black')}}>
          <h1 style={{ color : buttonColor2 }} id="toAbout" onClick={toDocs}>Documentation</h1>
        </div>

        <div style={{ backgroundColor : '#00BCD4', width : 250, height : 50, display : 'flex', justifyContent : 'center', alignContent : 'center', alignItems : 'center', borderRadius : 10, cursor : 'pointer'}} onMouseEnter={() => {setButtonColor('white')}} onMouseLeave={() => {setButtonColor('black')}}>
          <h1 style={{ color : buttonColor }} id="toAbout" onClick={toDetail}>About Us</h1>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)