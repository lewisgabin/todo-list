import TaskItem from "./TaskItem";

const TaskList = ({ openEditForm, tasks, deleteTask,toggleCompleteTask }) => {
  return (
    <ul className="taskList">
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
