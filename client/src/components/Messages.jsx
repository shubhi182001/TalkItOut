import React from 'react'
import {AppBar, Toolbar, styled ,Box} from '@mui/material';
import LoginDialog from './account/LoginDialog'


const Header = styled(AppBar)`
    height: 200px;
    background: #00bfa5;
`
const Component = styled(Box)`
    height:100vh;
`

const Messages = () => {
  return (
    <Component>
    <Header>
        <Toolbar>
            <LoginDialog/> 
        </Toolbar>
    </Header>
    </Component>
  )
}

export default Messages