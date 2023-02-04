import { useState } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const openEditForm = () => {
    setIsEditing(true);
  };
  const closeEditForm = () => {
    setIsEditing(false);
  };
  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        {isEditing && <EditForm closeEditForm={closeEditForm}/>}

        <Form />
        <TaskList openEditForm={openEditForm} />
      </div>
    </>
  );
}

export default App;
