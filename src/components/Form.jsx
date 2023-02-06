import { PlusIcon } from "@heroicons/react/24/outline";

const Form = ({ createTask, description, setDescription, setTitle, title }) => {
  return (
    <form className="taskForm" onSubmit={createTask}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
