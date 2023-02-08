import { useEffect, useState } from "react";
import db from "../firebase/firebaseConfig";
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
import { createTask, updatedTask } from "../services/TaskServices";

export const useGetTasks = () => {
  const [tasks, setTasks] = useState([]);

  //Read task from firebasa
  useEffect(() => {
    const tasksRef = collection(db, "tasks");
    const q = query(tasksRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return [tasks];
};

export const useCountTask = () => {
  const countTask = (tasks) => {
    return 0;
  };

  const countTaskCompleted = (tasks) => {
    const completed = tasks.filter((task) => task.completed == true);
    return completed.length;
  };

  return [countTask, countTaskCompleted];
};

export const useFormTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [taskId, setTaskId] = useState("");

  const changeValue = ({ target }) => {
    const { name, value } = target;
    setTask({ ...task, [name]: value });
  };

  const useCreateTask = async (e) => {
    e.preventDefault();
    const { description, title, completed } = task;
    if (description === "" || title === "") {
      alert("Please, complete the form!");
      return;
    }

    try {
      await createTask(task);
      setTask({ title: "", description: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  const openEditForm = (task) => {
    setTask(task);
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setTask({
      title: "",
      description: "",
      completed: false,
    });
    setIsEditing(false);
  };

  //Updated task from firebasa
  const useUpdatedTask = async (e) => {
    e.preventDefault();
    const { description, title } = task;
    if (description === "" || title === "") {
      alert("Please, complete the form!");
      return;
    }

    try {
      await updatedTask(task);
      setTask({ title: "", description: "" });
      setIsEditing(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return [
    useCreateTask,
    task,
    changeValue,
    openEditForm,
    useUpdatedTask,
    isEditing,
    closeEditForm,
  ];
};
