import React from 'react'
import { Container } from '@material-ui/core';
export default function OurTeam() {
  return (
    <div style={{ height : '80vh', backgroundColor : '#1a2b33' }}>
      <div style={{ paddingTop : 70, display : 'flex', flexDirection : 'column', alignContent : 'center' }}>
        <div>
          <h1 id="ourTeam" style={{ color : 'white', textAlign : 'center' }} >OUR TEAM</h1>
          <hr style={{width : 400}}/>
        </div>
        <Container style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-between', marginTop : 50 }}>
          <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignContent : 'center', alignItems : 'center' }} id="teamContainer1">
            <img src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png" alt="team 1" style={{ width : 130, height : 130 }} />
            <h2>Tommy Sutjipto</h2>                  
          </div>
          <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignContent : 'center', alignItems : 'center' }} id="teamContainer2">
            <img src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png" alt="team 1" style={{ width : 130, height : 130 }} />
            <h2>Filbert</h2>
          </div>
          <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignContent : 'center', alignItems : 'center' }} id="teamContainer3">
            <img src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png" alt="team 1" style={{ width : 130, height : 130 }} />
            <h2>Adi Saputra</h2>       
          </div>
          <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignContent : 'center', alignItems : 'center' }} id="teamContainer4">
            <img src="http://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png" alt="team 1" style={{ width : 130, height : 130 }} />   
            <h2>Reza Basuki</h2>
          </div>
        </Container>
      </div>
    </div>
  )
}
