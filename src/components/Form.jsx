import { PlusIcon } from "@heroicons/react/24/outline";
const Form = () => {
  const handleFormSubmit = (e) => {
    e.preventDefaul();
    console.log(e.target.value);
  };
  return (
    <form className="taskForm" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="task"
          required
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
