import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Installation from '../components/installation'
import InstallDependecies from '../components/usage-installDependecies'
import RunCode from '../components/usage-runCode'
import DeleteLog from '../components/usage-deleteLog'
import CommentUncomment from '../components/usage-commentUncomment'

export default function Documentation() {
  const [ installColor, setFontColor ] = useState('') 
  const [ color1, setColor1 ] = useState('')
  const [ color2, setColor2 ] = useState('')
  const [ color3, setColor3 ] = useState('')
  const [ color4, setColor4 ] = useState('')
  const [ descript, setDescript ] = useState(Installation)

  // function descriptShow(){
    
  // }

  return (
    <div style={{ height : '100vh' }}>
      <div style={{ paddingTop : 60,  display : 'flex', flexDirection : 'row' }}>
        <div style={{ width : '23vw', height : '91vh', overflow : 'auto'}} id="navigator">
          <Container style={{ height : '120vh' }}>
            <h3 style={{ fontSize : 20, cursor : 'pointer', color : installColor }} onMouseEnter={() => {setFontColor('#757575')}} onMouseLeave={() => {setFontColor('')}} onClick={() => {setDescript(Installation)}}>Installation</h3>            
            <h3 style={{ fontSize : 20 }}>Usage</h3>
            <p style={{ cursor : 'pointer', color : color1 }} onMouseEnter={() => {setColor1('#757575')}} onMouseLeave={() => {setColor1('')}} onClick={() => {setDescript(InstallDependecies)}}>Install Dependencies</p>
            <p style={{ cursor : 'pointer', color : color2 }} onMouseEnter={() => {setColor2('#757575')}} onMouseLeave={() => {setColor2('')}}  onClick={() => {setDescript(DeleteLog)}}>Delte Log</p>
            <p style={{ cursor : 'pointer', color : color3 }} onMouseEnter={() => {setColor3('#757575')}} onMouseLeave={() => {setColor3('')}}  onClick={() => {setDescript(RunCode)}}>Run Code</p>
            <p style={{ cursor : 'pointer', color : color4 }} onMouseEnter={() => {setColor4('#757575')}} onMouseLeave={() => {setColor4('')}}  onClick={() => {setDescript(CommentUncomment)}}>Comment & Uncomment Log</p>
          </Container>
        </div>
        <div style={{ width : '77vw', height : '91vh', overflow : 'auto'}} id="description">
          {
            descript
          }
        </div>
      </div>
    </div>
  )
}
