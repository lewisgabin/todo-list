import { CheckIcon } from "@heroicons/react/24/outline";
const EditForm = ({
  closeEditForm,
  updatedTask,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  return (
    <div
      role="dialog"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditForm();
      }}
    >
      <form className="taskForm" onSubmit={updatedTask}>
        <div className="wrapper">
          <input
            type="text"
            className="input"
            id="editTask"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            placeholder="Enter Task"
          />
          <label htmlFor="editTask" className="label">
            Edit Title
          </label>
        </div>
        <div className="wrapper">
          <textarea
            className="textarea"
            id="textarea"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="3"
            cols="50"
          />
          <label htmlFor="textarea" className="label">
            Edit Description
          </label>
        </div>
        <button type="submit" className="btn" aria-label="Edit">
          <CheckIcon className="icon" />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
