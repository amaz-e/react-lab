import './App.css';
import {useState} from "react";

function App() {

    const [email, setEmail] = useState('mail@mail.pl');
    function handleChange(event){
        setEmail(event.target.value);
    }

    let mailComment = '';
    if (email.length <=5){mailComment = <p>Za krótki mail</p>}
    if (email.length > 5){mailComment = <p>Dobra długosc maila</p>}

  return (
      <div>
        <h1>System do zapisów na zajęcia</h1>
          <h2>Twój mail to: {email}</h2>
          {mailComment}
          <input type="text" value={email} onChange={handleChange}/>
      </div>
  );
}

export default App;
