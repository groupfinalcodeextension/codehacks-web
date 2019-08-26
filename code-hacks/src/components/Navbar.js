import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import iconCodeHacks from '../images/codehacks2.png'
import { withRouter } from 'react-router-dom'

export function SimpleAppBar(props) {

  return (
    <div style={{ width : '100%'}}>
      <AppBar position="static" style={{ backgroundColor : '#1a2b33', width : '100%', position : 'fixed' }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">            
              <img src={iconCodeHacks} alt="Code Hacks Logo" onClick={() => {props.history.push("/")}} style={{ cursor : 'pointer' }} />  
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(SimpleAppBar)