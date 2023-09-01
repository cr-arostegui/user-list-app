import AddUser from "./components/AddUser";

function App() {

  const onNewUserHandler = (data) => {
    console.log('New User Data', data);
  }

  return (
    <div>
      <AddUser onNewUser={onNewUserHandler} />
    </div>
  );
}

export default App;
