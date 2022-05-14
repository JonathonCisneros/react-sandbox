/*** To-Do list from jsonplaceholder displays title of 1st to-do item ***/

import { useState, useRef, useEffect } from 'react';

function ToDo ( ) {
  const [ loading, setLoading ] = useState( true );
  const [ toDo, setToDo ] = useState( { } );

  // use "useRef" to reference the component
  const isMounted = useRef( true );

  useEffect( ( ) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(( res ) => res.json( ) )
      .then(( data ) => {
        setTimeout( ( ) => {
          if ( isMounted.current ) {
            setToDo( data )
            setLoading( false )
          }
        }, 3000 )
      })

    // runs when component is unmounted, fixes memory leak, but no memory leak in React 18?
    return ( ) => {
      isMounted.current = false;
    }
  }, [ isMounted ] );

  return loading ? <h3>Loading...</h3> : <h2>To-Do: { toDo.title }</h2>
}

 export default ToDo;
