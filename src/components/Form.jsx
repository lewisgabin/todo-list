import { PlusIcon } from "@heroicons/react/24/outline";
const Form = ({ createTask, description, setDescription }) => {
  return (
    <form className="taskForm" onSubmit={createTask}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Task
        </label>
      </div>
      <button type="submit" className="btn" aria-label="Add">
        <PlusIcon className="icon" />
      </button>
    </form>
  );
};

export default Form;
