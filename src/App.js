import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { StarWarsPage } from "./pages/StarWarsPage";
import { Navigation } from "./components/Navigation/Navigation";
import { RandomUserPage } from "./pages/RandomUserPage";
import { Form } from "./pages/Form";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function handleCreateUser(user) {
    setUsers([user, ...users]);
  }

  return (
    <div className="App">
      <h1>Boilerplate</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/starwars" element={<StarWarsPage />} />
        <Route path="/users" element={<RandomUserPage />} />
        <Route
          path="/form"
          element={<Form onCreateUser={handleCreateUser} />}
        />
      </Routes>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
