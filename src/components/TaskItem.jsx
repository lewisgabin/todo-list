import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
const TaskItem = ({
  openForm,
  task,
  index,
  deleteTask,
  doneTask,
  toggleCompleteTask,
}) => {
  return (
    <>
      <li className="task">
        <div className="taskGroup">
          <input
            type="checkbox"
            checked={task.completed}
            onClick={() => toggleCompleteTask(task.id, task.completed)}
            className="checkbox"
            id={`check${index}`}
          />

          <label htmlFor={`check${index}`}>
            <p className="mark">
              <CheckIcon strokeWidth={2} width={24} height={24} />
            </p>
            <p className="title">{task.title}</p>
            <p className="description">{task.description}</p>
          </label>
        </div>
        <div className="taskGroup">
          <button
           type="button"
            onClick={() => openForm(task)}
            className="btn"
            id="edit"
            aria-label="edit"
          >
            <PencilSquareIcon strokeWidth={2} width={24} height={24} />
          </button>

          <button
            type="button"
            onClick={() => deleteTask(task.id)}
            className="btn"
            id="delete"
            aria-label="delete"
          >
            <TrashIcon strokeWidth={2} width={24} height={24} />
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;
