const Counter = ({countTask, countTaskCompleted,tasks}) => {
  return (
    <div className="counter">
      <div className="left">
        <p>Created Task</p>
        <span>{countTask()}</span>
      </div>
      <div className="right">
        <p>Completed Task</p>
        <span>{ countTaskCompleted(tasks)} of {countTask(tasks)}</span>
      </div>
    </div>
  );
};

export default Counter;
