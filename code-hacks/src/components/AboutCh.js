import React from 'react'
import { Container } from '@material-ui/core'

export default function AboutCh() {
  return (
    <div style={{ height : '90vh', backgroundColor : '#182024' }}>
      <div style={{ paddingTop : 60/* , display :'flex', justifyContent : 'center',   */}} id="aboutCh">
        <h1 style={{ textAlign : 'center' }}>About Code Hacks</h1>
        <hr style={{ width : 400 }} />
      </div>
        <Container style={{ marginTop : 30 }}>
          <div id="whatIs">
            <h2>What is Code Hacks?</h2>
            <h3>CodeHacks is a Visual StudioCode Extension that our team developed for developers to make their life easier. Why easier? because we can help you make coding less stressful. How ? We asked developers what is their main problem when you first want to start coding, they said that downloading the required node modules is taking so much time as they need to install the required node package manager one by one. So we created an extension that automatically install the dependencies found in your current file.</h3>
          </div>
        </Container>      
    </div>
  )
}
