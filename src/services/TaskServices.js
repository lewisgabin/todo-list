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
import { async } from "@firebase/util";

export async function createTask({ title, description, completed }) {
  const tasksRef = collection(db, "tasks");
  const createdAt = Date.now();
  await addDoc(tasksRef, { title, description, completed, createdAt });
}

export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};

export const updatedTask = async ({ title, description, id }) => {
  const tasksRef = doc(db, "tasks", id);
  await updateDoc(tasksRef, { description, title });
};

export const toggleCompleteTask = async (taskId, completed) => {
  const tasksRef = doc(db, "tasks", taskId);
  await updateDoc(tasksRef, { completed: !completed }).catch((error) => {
    console.log(error.message);
  });
};
