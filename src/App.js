import { useState } from "react";
import AddUser from "./components/AddUser";
import Card from "./components/Card";
import UserList from "./components/UserList";

function App() {
  const [userStore, setUserStore] = useState([]);

  const onNewUserHandler = (data) => {
    setUserStore(prevValue => [...prevValue, data]);
  }

  return (
    <div className="App">
      <Card>
        <AddUser onNewUser={onNewUserHandler} />
      </Card>
      <Card>
        <UserList users={userStore} />
      </Card>
    </div>
  );
}

export default App;
