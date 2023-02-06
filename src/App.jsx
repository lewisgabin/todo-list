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
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [taskId, settaskId] = useState("");
  const [completed, setCompleted] = useState(false);
  const tasksRef = collection(db, "tasks");

  const openEditForm = (description, id) => {
    setDescription(description);
    settaskId(id);
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setDescription("");
    settaskId("");
    setIsEditing(false);
  };

  //Create task
  const createTask = async (e) => {
    e.preventDefault();

    if (description === "") {
      alert("Please, write a task!");
      return;
    }
    const createdAt = Date.now();
    addDoc(tasksRef, { description, completed, createdAt })
      .then(() => {
        setDescription("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Read task from firebasa
  useEffect(() => {
    const q = query(tasksRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //Updated task from firebasa
  const updatedTask = async (e) => {
    e.preventDefault();

    if (description === "") {
      alert("Please, write a task!");
      return;
    }

    const tasksRef = doc(db, "tasks", taskId);
    await updateDoc(tasksRef, { description })
      .then(() => {
        closeEditForm();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //Delete task from firebasa
  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id);
    await deleteDoc(taskDoc);
  };

  //toggle complete task
  const toggleCompleteTask = async (taskId, completed) => {
    const tasksRef = doc(db, "tasks", taskId);
    await updateDoc(tasksRef, { completed: !completed }).catch((error) => {
      console.log(error.message);
    });
  };

  const countTask = () => {
    return tasks.length;
  };

  const countTaskCompleted = () => {
    const completed = tasks.filter((task) => task.completed == true);
    return completed.length;
  };

  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        {isEditing && (
          <EditForm
            description={description}
            setDescription={setDescription}
            closeEditForm={closeEditForm}
            updatedTask={updatedTask}
          />
        )}

        <Form
          createTask={createTask}
          description={description}
          setDescription={setDescription}
        />
        {tasks.length ? (
          <TaskList
            deleteTask={deleteTask}
            tasks={tasks}
            openEditForm={openEditForm}
            toggleCompleteTask={toggleCompleteTask}
            countTask={countTask}
            countTaskCompleted={countTaskCompleted}
          />
        ) : (
          <div className="msj">
            <p>No tasks to show...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
