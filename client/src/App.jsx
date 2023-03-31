import './App.css'
import Messages from './components/Messages'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';


function App() {
  const clientId= '112840515521-5knvacdtu8l81ubb558oilvk2unjvngl.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider  >
        <Messages/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
