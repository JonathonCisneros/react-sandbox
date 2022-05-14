/*** Stores inputs in an array in local storage and displays it ***/

import useLocalStorage from '../hooks/useLocalStorage';
import { useState } from 'react';

function CustomHookExample2 ( ) {
  const [ task, setTask ] = useLocalStorage('task', ' ' );
  const [ tasks, setTasks ] = useLocalStorage('tasks', [ ] );
  const [ id, setID ] = useState( 0 );

  const onSubmit = ( e ) => {
    e.preventDefault( );
    setID( id + 1 );

    const taskObj = {
      id,
      task,
      completed: false,
      date: new Date( ).toLocaleDateString( )
    }

    setTasks( [ ...tasks, taskObj ] );
  }

  // Clear local storae function
  const clearTasks = ( ) => {
    setTasks( [ ] );
  }

  return (
    <div>
      <h1>Custom Hook - <i>useLocalStorage()</i></h1>
      <h3 className='text-secondary'>This custom hook adds input to local storage and can be used to display what is in storage.</h3><br/>
      <form className='w-25' onSubmit={ onSubmit }>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            className='form-control w-200'
            type="text"
            value={ task }
            onChange={ ( e ) => setTask( e.target.value ) }
          /><br/>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <button onClick={ clearTasks } className="btn btn-secondary">Clear</button><br/><br/>
      {
        // Display data from local storage. Can't really change 'completed' ?
        tasks.map( task => (
          <li key={ task.id }>{ task.date } - Task #{ task.id } from local storage: { task.task }</li>
        ) )
      }
    </div>
  );
}

export default CustomHookExample2;
