/*** This example shows how to prevent memory leak ***/
/*** React 18 may have solved this issue? Maybe no    ***/
/*** need for this memory leak prevention?                     ***/
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ToDo from './ToDo';

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(false);

  return (
    <div>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useRef Example 3</h1>
      <h3 className='text-secondary'>
        Prevents memory leak when component is unmounted while loading data
      </h3>
      <br />
      <button
        className='btn btn-primary'
        onClick={() => setShowToDo(!showToDo)}
      >
        Toggle To-Do
      </button>
      <br />
      <br />

      {showToDo && <ToDo />}
    </div>
  );
}
export default UseRefExample3;
