import './App.css'
import Messages from './components/Messages'
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId= '112840515521-5knvacdtu8l81ubb558oilvk2unjvngl.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messages/>
    </GoogleOAuthProvider>
  )
}

export default App
