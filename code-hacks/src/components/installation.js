import React from 'react'
import { Container } from '@material-ui/core'

export default function installation() {
  return (
    <div>
      <Container style={{ paddingTop : 30 }}>
        <h1>Installation</h1>
        <div>
          <div>
            <p>Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.</p>
            <div style={{ backgroundColor : '#E0E0E0', width : 500, height : 60 }}>
              <Container style={{ paddingTop : 0.5 }}>
                <p>ext install johnpapa.vscode-peacock</p>              
              </Container>
            </div>
          </div>
          <div style={{ paddingTop : 40 }}>
            <p>Or You can find <b>Code Hacks</b> at Visual Studio Code Extensions</p>
            <ol>
              <li style={{ paddingBottom : 10 }}>Open <b>Extensions</b> sideBar panel in Visual Studio Code</li>
              <li style={{ paddingBottom : 10 }}>Input <b>Code Hacks</b> in the Search Field</li>
              <li style={{ paddingBottom : 10 }}>Click <b>Install</b></li>
              <li>Click <b>Reload</b>, if required or you can re-open your Visual Studio Code</li>
            </ol>
          </div>
        </div>
      </Container>
    </div>
  )
}
