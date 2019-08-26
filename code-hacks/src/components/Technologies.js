import React from 'react'
import iconChai from '../images/chai.png'
import iconMocha from '../images/mocha.png'
import icontypescript from '../images/typescript.png'
import iconVscode from '../images/vscode2.png'
import iconVs from '../images/visualStudio.png'
import Container from '@material-ui/core/Container';
import iconNpm from '../images/npm.png'
import iconGithub from '../images/github.png'

export default function Techonologies() {
  const images = [iconChai, iconMocha, icontypescript, iconVscode, iconVs, iconNpm, iconGithub]
  return (
    <div style={{ height : '80vh', backgroundColor : '#182024', display : 'flex', flexDirection : 'column',alignItems : 'center', alignContent : 'center' }}>
    <h1 style={{ marginTop : 80, color : 'rgb(87, 204, 206)' }} id="technoLog">Techonologies</h1>
      <Container style={{ marginTop : 20, display : 'flex',justifyContent : 'center', alignContent : 'center', alignItems : 'center' }}>
        <div style={{ display : 'flex', flexDirection : 'row', flexWrap : 'wrap', width : '72vw', marginLeft : 100 }} >
          {
            images.map((item, i) => (
              <div key={i} style={{ margin : 20 }}>
                <img src={item} alt={`${item}`} style={{ width : 140, height : 140 }} />
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}