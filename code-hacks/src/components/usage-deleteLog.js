import React from 'react'
import { Container } from '@material-ui/core'
import InstallDependencies from '../images/deleteLog.webm'

export default function usageDeleteLog() {
  return (
    <div>
      <Container style={{ paddingTop : 30, paddingBottom : 30 }}>
        <h1>Delete Log</h1>
        <div>          
          <p>This feature help you clean your code from dummy logs.</p>          
          <div style={{ paddingTop : 20 }}>
            <p>Usage :</p>
            <div style={{ backgroundColor : '#E0E0E0', width : 750, height : 120 }}>
              <ol style={{ paddingTop : 15 }}>  
                <li style={{ paddingTop : 12 }}>Use shortcut CTRL + SHIFT + P</li> 
                <li style={{ paddingTop : 12 }}>Then input Delete Log and press enter or click on the suggestion</li>
              </ol>
            </div>
            <div>
              <p>Video : </p>
              <iframe src={InstallDependencies} title="Delete Log Video" width="800" height="450"></iframe>
            </div>
          </div>    
        </div>        
      </Container>
    </div>
  )
}
