import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Auth0Provider} from "@auth0/auth0-react";

const authDomain = 'auth.daolam.link'
const clientId = '7hIpcOBTHWbYlVV4sgrvl7b3Gr08il0Z'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)