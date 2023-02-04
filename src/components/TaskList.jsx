import TaskItem from "./TaskItem";

const TaskList = ({openEditForm}) => {
  return (
    
    <ul className="taskList">
      <TaskItem openEditForm={openEditForm} />
    </ul>
  );
};

export default TaskList;
