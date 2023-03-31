import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';
const Component = styled(Box)`
    display: flex;
`
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`

const QRCode = styled('img')({
    height: 264,
    width:264,
    margin: '50px 0 0 56px'
});

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`
const StyledList = styled(List)`
    &>li  {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color:#4a4a4a;

    }                   
`


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width:'60%',
    maxWidth:"100%",
    maxHeight:"100%",
    overflow:"hidden",
}



const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);


    const onLoginSuccess = (res) => {
        
        const decoded = jwt_decode(res.credential)
        setAccount(decoded);
    }
    const onLoginError = (e) => {
        console.log(e);
    }

  return (
    <Dialog 
        open={true} 
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title>
                    Use Whatsapp on your computer
                </Title>
                <StyledList>
                    <ListItem>1. Open Whatsapp on your phone</ListItem>
                    <ListItem>2. Tap  &nbsp; <b>Menu</b> <span><MoreVertIcon/></span> or &nbsp; <b>Settings</b> &nbsp; <span><SettingsIcon/></span> &nbsp; and select  &nbsp;<b>Linked Devices</b>  </ListItem>
                    <ListItem>3. Tap on &nbsp; <b>Link a Device</b></ListItem>
                    <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                </StyledList>
            </Container>
            <Box style = {{position:"relative"}}>
                <QRCode src = {qrCodeImage} alt="QR code" />
                <Box style = {{position:"absolute", top:"50%", transform:"translateX(25%)"}}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog