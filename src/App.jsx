import EditForm from "./components/EditForm";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import { useGetTasks, useCountTask,useFormTask} from "./hook/useTasks";
import { deleteTask, toggleCompleteTask } from "./services/TaskServices";

function App() {
  const [tasks] = useGetTasks();
  const [countTask,countTaskCompleted] = useCountTask();
  const [
    createTask,
    task,
    changeValue,
    openForm,
    updatedTask,
    isEditing,
    closeEditForm,
  ] = useFormTask();

  return (
    <>
      <header>
        <h1 id="title">Todo List</h1>
      </header>
      <div className="container">
        {isEditing && (
          <EditForm
            task={task}
            changeValue={changeValue}
            closeEditForm={closeEditForm}
            updatedTask={updatedTask}
          />
        )}

        <Form createTask={createTask} task={task} changeValue={changeValue} />
        {tasks.length ? (
          <TaskList
            deleteTask={deleteTask}
            tasks={tasks}
            openForm={openForm}
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
