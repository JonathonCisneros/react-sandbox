/*** useCallback hook used to enhance performance, only if necessary ***/
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Task']);
  }, [setTasks]);

  return (
    <div>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useCallback Example</h1>
      <h3 className='text-secondary'>
        Another performance enhancing hook that does not re-render the component
        when <i>React.memo()</i> wraps a component and <i>useCallback()</i> is
        used when setting state. Open up console to find only one "Button is
        rendered" message.
      </h3>
      <br />
      <Button addTask={addTask} />
      <br />
      {tasks.map((task, index) => (
        <p key={index}>
          Task: {task} {index + 1}
        </p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button is rendered');
  return (
    <div>
      <button onClick={addTask} className='btn btn-primary'>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
