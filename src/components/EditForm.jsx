import { CheckIcon} from "@heroicons/react/24/outline";
const EditForm = ({closeEditForm,updatedTask, description, setDescription}) => {
  const handleFormSubmit = (e) => {
    e.preventDefaul();
    console.log(e.target.value);
  };
  return (
    <div role="dialog"  onClick={(e) => {e.target === e.currentTarget && closeEditForm()}}>
    <form className="taskForm" onSubmit={updatedTask}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="editTask"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          placeholder="Enter Task"
        />
        <label htmlFor="editTask" className="label">
          Edit Task
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
