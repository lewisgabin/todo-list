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
          required
          placeholder="Enter Task"
        />
        <label htmlFor="task" className="label">
          Enter Title
        </label>
      </div>
      <div className="wrapper">
        <textarea
          className="textarea"
          id="textarea"
          required
          rows="2"
          cols="50"
        />
        <label htmlFor="textarea" className="label">
          Enter Description
        </label>
      </div>
      <button type="submit" className="btn" aria-label="Add">
        <PlusIcon className="icon" />
      </button>
    </form>
  );
};

export default Form;
