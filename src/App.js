import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    function handleChange(event){
        setEmail(event.target.value);
    }

    let content;

    function login(){
        setIsAuthenticated(true);
    }

    function logout(){
        setIsAuthenticated(false);
        setEmail('');
    }

    if (!isAuthenticated) {
        content = <div>
            <h1>System logowania</h1>
            <input type="text" value={email} onChange={handleChange} placeholder="adres mail" />
            <button onClick={login}>Zaloguj</button>
        </div>
    }
    if (isAuthenticated) {
        content =
        <div>
            <p>Cześć: {email}</p>
            <button onClick={logout}>Wyloguj</button>
        </div>
    }

  return (
      <div>
          {content}
      </div>
  );
}

export default App;
