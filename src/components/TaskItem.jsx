import {
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
const TaskItem = ({ openEditForm, task, index, deleteTask }) => {
  return (
    <>
      <li className="task">
        <div className="taskGroup">
          <input type="checkbox" className="checkbox" id={`check${index}`} />

          <label htmlFor={`check${index}`}>
            <p className="mark">
              <CheckIcon strokeWidth={2} width={24} height={24} />
            </p>
            {task.description}
          </label>
        </div>
        <div className="taskGroup">
          <button
            onClick={() => openEditForm()}
            className="btn"
            id="edit"
            aria-label="edit"
          >
            <PencilSquareIcon strokeWidth={2} width={24} height={24} />
          </button>

          <button type="button" onClick={()=>deleteTask(task.id)} className="btn" id="delete" aria-label="delete">
            <TrashIcon strokeWidth={2} width={24} height={24} />
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskItem;