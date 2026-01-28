import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="1038120470687-6uiv3ntru1cffho9fbhtg32b9758qvb9.apps.googleusercontent.com">
    <BrowserRouter>    
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>

)
