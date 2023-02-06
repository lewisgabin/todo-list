import { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import db from "./firebase/firebaseConfig";
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
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
    const unsubscribe = onSnapshot(tasksCollectionRef, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Updated task from firabasa

  //Delete task from firabasa
  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  };

  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        {isEditing && <EditForm closeEditForm={closeEditForm} />}

        <Form />
        {tasks && (
          <TaskList
            deleteTask={deleteTask}
            tasks={tasks}
            openEditForm={openEditForm}
          />
        )}
      </div>
    </>
  );
}

export default App;
