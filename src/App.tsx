import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google'

function App() {
  const [loginUser, setLoginUser] = React.useState<CredentialResponse | null>(null)

  return (
    <GoogleOAuthProvider clientId='767787011140-e13l6211kju1nvqqe3m1dheap7vjf69s.apps.googleusercontent.com'>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{loginUser ? `Welcome ${loginUser.credential}`:"Please login to continue"}</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              setLoginUser(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </header>
      </div>
    </GoogleOAuthProvider>

  );
}

export default App;
