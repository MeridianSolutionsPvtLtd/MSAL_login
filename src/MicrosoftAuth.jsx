import React, { useEffect, useState } from 'react';
import './MicrosoftAuth.css';
import microsoftLogo from './assets/microsoft_logo.png';

const clientId = '77eb0554-9da5-4594-813e-591eb16b7552'; 
const tenantId = 'a8801bcb-7990-408e-ab0c-e73eccd70288'; 
const redirectUri = 'http://localhost:5173/'; 
const clientSecret = '17e80197-d61f-4b39-bb85-c76a7c8db4a4'; 

function MicrosoftAuth() {
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check if there is an authorization code in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      setAuthCode(code);
      // Exchange the authorization code for an access token
      fetchAccessToken(code);
    }
  }, []);

  const handleMicrosoftAuth = () => {
    const authUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&response_mode=query&scope=openid%20profile%20email&state=12345`;
    window.location.href = authUrl;
  };

  const fetchAccessToken = async (code) => {
    try {
      const response = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: clientId,
          scope: 'openid profile email',
          code: code,
          redirect_uri: redirectUri,
          client_secret: clientSecret,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
      setAccessToken(data.access_token);
      console.log('Access Token:', data.access_token);
      // You can now use the access token to authenticate API requests
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
  };

  return (
    <div className="microsoft-auth-container">
      <button className="microsoft-auth-btn" onClick={handleMicrosoftAuth}>
        <img src={microsoftLogo} alt="Microsoft Logo" className="microsoft-logo" />
        Sign in with Microsoft
      </button>
      {authCode && <p>Authorization Code: {authCode}</p>}
      {accessToken && <p>Access Token: {accessToken}</p>}
    </div>
  );
}

export default MicrosoftAuth;
