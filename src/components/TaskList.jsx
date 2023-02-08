import Counter from "./Counter";
import TaskItem from "./TaskItem";

const TaskList = ({
  openForm,
  tasks,
  deleteTask,
  toggleCompleteTask,
  countTask,
  countTaskCompleted,
}) => {
  return (
    <ul className="taskList">
      <Counter countTask={countTask} tasks={tasks} countTaskCompleted={countTaskCompleted} />
      {tasks.map((task, index) => {
        return (
          <TaskItem
            deleteTask={deleteTask}
            openForm={openForm}
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
