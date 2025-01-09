import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Auth0Provider} from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom";

const authDomain = 'auth.daolam.link'
const clientId = '7hIpcOBTHWbYlVV4sgrvl7b3Gr08il0Z'

const onRedirectCallback = (appState?: { returnTo?: string }) => {
  const targetUrl = appState?.returnTo || '/'
  window.history.replaceState({}, document.title, targetUrl)
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)