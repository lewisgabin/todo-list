import { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import db from "./firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, "tasks");

  const openEditForm = () => {
    setIsEditing(true);
  };
  const closeEditForm = () => {
    setIsEditing(false);
  };

  //Create task
  //Read task from firabasa
  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);
  //Updated task from firabasa
  //Delete task from firabasa

  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        {isEditing && <EditForm closeEditForm={closeEditForm} />}

        <Form />
        <TaskList tasks={tasks} openEditForm={openEditForm} />
      </div>
    </>
  );
}

export default App;
