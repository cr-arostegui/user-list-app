import AddUser from "./components/AddUser";
import Card from "./components/Card";

function App() {

  const onNewUserHandler = (data) => {
    console.log('New User Data', data);
  }

  return (
    <div className="App">
      <Card>
        <AddUser onNewUser={onNewUserHandler} />
      </Card>
    </div>
  );
}

export default App;
