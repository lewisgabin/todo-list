import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        <Form />
        <TaskList/>
      </div>
    </>
  );
}

export default App;
