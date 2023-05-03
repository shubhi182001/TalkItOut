import './App.css'
import Messages from './components/Messages'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId= '884780053477-dode6kspgtj5c9ejvo43ki85lrg1q536.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider  >
        <Messages/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
