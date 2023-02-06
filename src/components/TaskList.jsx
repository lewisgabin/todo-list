import Counter from "./Counter";
import TaskItem from "./TaskItem";

const TaskList = ({
  openEditForm,
  tasks,
  deleteTask,
  toggleCompleteTask,
  countTask,
  countTaskCompleted,
}) => {
  return (
    <ul className="taskList">
      <Counter countTask={countTask}  countTaskCompleted={countTaskCompleted} />
      {tasks.map((task, index) => {
        return (
          <TaskItem
            deleteTask={deleteTask}
            openEditForm={openEditForm}
            index={index}
            task={task}
            toggleCompleteTask={toggleCompleteTask}
            key={task.id}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
