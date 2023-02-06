import TaskItem from "./TaskItem";

const TaskList = ({ openEditForm, tasks, deleteTask }) => {
  return (
    <ul className="taskList">
      {tasks.map((task,index) => {
        return <TaskItem deleteTask={deleteTask} openEditForm={openEditForm} index={index} task={task} key={task.id} />;
      })}
    </ul>
  );
};

export default TaskList;
