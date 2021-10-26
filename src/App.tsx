import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { Input } from "./Components/Input";

interface User {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [userName, setUserName] = useState("");
  const [userHobby, setUserHobby] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleSumbit = (name: string, hobby: string, age: string) => {
    const person = { name, hobby, age };

    setUsers([...users, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          placeholder="Hobby"
          onChange={(e) => setUserHobby(e.target.value)}
        />
        <Input placeholder="Age" onChange={(e) => setUserAge(e.target.value)} />
        <button onClick={() => handleSumbit(userName, userHobby, userAge)}>
          Send
        </button>
        <ul>
          {users.map((user) => (
            <Card name={user.name} hobby={user.hobby} age={user.age} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
