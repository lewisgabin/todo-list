const Counter = ({countTask, countTaskCompleted}) => {
  return (
    <div className="counter">
      <div className="left">
        <p>Created Task</p>
        <span>{countTask()}</span>
      </div>
      <div className="right">
        <p>Completed Task</p>
        <span>{ countTaskCompleted()} of {countTask()}</span>
      </div>
    </div>
  );
};

export default Counter;
