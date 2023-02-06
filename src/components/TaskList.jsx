import TaskItem from "./TaskItem";

const TaskList = ({ openEditForm, tasks }) => {
  return (
    <ul className="taskList">
      {tasks.map((task,index) => {
        return <TaskItem openEditForm={openEditForm} index={index} task={task} key={task.id} />;
      })}
    </ul>
  );
};

export default TaskList;
