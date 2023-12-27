'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
const scopes = [
  'streaming',
  'user-read-currently-playing',
  'user-read-playback-state',
  'playlist-read-private',
  'playlist-read-collaborative',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-read-email',
  'user-read-private',
  'user-library-modify',
  'user-library-read',
]

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=cb6ed9e71b1b4357b92734894a00f6f8&response_type=code&redirect_uri=${encodeURIComponent('http://localhost:3000')}&scope=${encodeURIComponent(scopes.join(' '))}`;

export default function Login() {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      axios.post('/api/exchangeToken', { code })
        .then(response => {
          setAccessToken(response.data.access_token);
        })
        .catch(error => {
          console.error('Error in token exchange:', error)
        });
    }
  }, []);
  if (accessToken) {
    return <div>Loged in!</div>
  }
  return (
    <a href={AUTH_URL}>
      <div>Login to App</div>
    </a>
  )
}
