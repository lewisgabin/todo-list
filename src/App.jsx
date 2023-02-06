import { useState, useEffect } from "react";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import db from "./firebase/firebaseConfig";
import {
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [comfirmed, setComfirmed] = useState(false);
  const tasksCollectionRef = collection(db, "tasks");

  const openEditForm = () => {
    setIsEditing(true);
  };
  const closeEditForm = () => {
    setIsEditing(false);
  };

  //Create task
  const createTask = async (e) => {
    e.preventDefault();

    if (description === "") {
      alert("Please, write a task!");
      return;
    }

    addDoc(tasksCollectionRef, { description, comfirmed })
      .then((response) => {
        setDescription("");
      })
      .catch((error) => {
        console.log(error.messages);
      });
  };
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

        <Form
          createTask={createTask}
          description={description}
          setDescription={setDescription}
        />
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
