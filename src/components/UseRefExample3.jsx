/*** This example shows how to prevent memory leak ***/
/*** React 18 may have solved this issue? Maybe no    ***/
/*** need for this memory leak prevention?                     ***/

import { useState } from 'react';
import ToDo from './ToDo';

function UseRefExample3 ( ) {
  const [ showToDo, setShowToDo ] = useState( false );

  return (
    <div>
      <h1>useRef Example 3</h1>
      <h3 className='text-secondary'>Prevents memory leak when component is unmounted while loading data</h3>
      <br/>
      <button
        className="btn btn-primary"
        onClick={ ( ) => (
          setShowToDo(!showToDo)
        )}
      >
        Toggle To-Do
      </button><br/><br/>

      { showToDo && <ToDo /> }
    </div>
  );
}
 export default UseRefExample3;
