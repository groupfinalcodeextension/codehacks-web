import React from 'react'
import { Container } from '@material-ui/core'
import commentUncomment from '../images/commentUncomment.webm'

export default function usageCommentUncomment() {
  return (
    <div>
      <Container style={{ paddingTop : 30, paddingBottom : 30 }}>
        <h1>Comment & Uncomment Log</h1>
        <div>          
          <p>This feature helps you to run your selected/higlighted code.</p>          
          <div style={{ paddingTop : 20 }}>
            <p>Usage :</p>
            <div style={{ backgroundColor : '#E0E0E0', width : 750, height : 120 }}>
              <ol style={{ paddingTop : 15 }}>  
                <li style={{ paddingTop : 12 }}>Use shortcut CTRL + SHIFT + P</li> 
                <li style={{ paddingTop : 12 }}>Then Run Code Hacks and press enter or click on the suggestion</li>
              </ol>
            </div>
            <div>
              <p>Video : </p>
              <iframe src={commentUncomment} title="Comment or Uncomment Log Video" width="800" height="450"></iframe>
            </div>
          </div>    
        </div>
      </Container>
    </div>
  )
}
