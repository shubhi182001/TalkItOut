import React, { useContext } from 'react'
import {AppBar, Toolbar, styled ,Box} from '@mui/material';
import LoginDialog from './account/LoginDialog'
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

const Header = styled(AppBar)`
    height: 125px;
    background: #00bfa5;
`

const LoginHeader = styled(AppBar)`
    height: 200px;
    background: #00bfa5;
`
const Component = styled(Box)`
    height:100vh;
`

const Messages = () => {

  const {account} = useContext(AccountContext);


  return (
    <Component>
      {
        account ? 
        <>
        <Header>
          <Toolbar>
            
          </Toolbar>
        </Header>
        <ChatDialog/> 
        </>
      : 
      <>
      <LoginHeader>
          <Toolbar>
            
          </Toolbar>
      </LoginHeader>
        <LoginDialog/> 
      
      </>

}
    </Component>

  )
}

export default Messages