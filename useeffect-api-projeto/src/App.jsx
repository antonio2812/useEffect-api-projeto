import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [user, setUser] = useState({ name:'', avatar:'' });

  useEffect(() => {
    fetch("https://api.github.com/users/antonio2812")
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    });
  }, []);

  return (
    <div className='container'>
      <strong>{user.name}</strong>

      <img src={user.avatar} alt="Foto de Perfil" />
    </div>
  )
}

export default App
