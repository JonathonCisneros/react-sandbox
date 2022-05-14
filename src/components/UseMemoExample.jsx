import { useMemo, useRef, useState, useEffect } from 'react';

function UseMemoExample ( ) {
  const [ number, setNumber ] = useState( 1 );
  const [ incr, setIncr ] = useState( 0 );

  // const sqrt = getSqrt( number ); // get sqrt without memo
  const sqrt = useMemo( ( ) => getSqrt( number ), [ number ]); // get sqrt with memo saves on performance, allows user to click the Re-Render button without calling the expensive function again

  const renders = useRef( 1 );

  useEffect( ( ) => {
    renders.current += 1
  });


  // Function when button is clicked
  // just adds 1 to previous state
  const onClick = ( ) => {
    setIncr( ( prevState ) => {
      console.log( prevState ); // display previous state before 1 is added
      return prevState + 1;
    });
  }

  return (
    <div>
      <h1>useMemo Example</h1>
      <h3 className='text-secondary'>The <i>useMemo()</i> hook prevents expensive functions from running again when not necessary. In this example, when you type in or scroll through numbers, an expensive function runs (includes a for loop that logs 1-10,000 in the console). When only the <b>Re-Render</b> button is clicked, the expensive function does not run since the number has not changed.</h3>
      <p>Renders: { renders.current }</p>
      <input
        type="number"
        className="form-control w-25"
        value={ number }
        onChange={ ( e ) => setNumber( e.target.value ) }
      />
      <p>The square root of { number } is { sqrt }.</p>
      <button
        className="btn btn-primary"
        onClick={ onClick }
      >
        Re-Render
      </button><br/><br/>
    </div>
  )
}


// Expensive function
function getSqrt ( number ) {
  for ( let i = 0; i <= 10000; i++ ) {
      console.log( i );
  }

  console.log('Expensive function called!');
  return Math.sqrt( number );
}

export default UseMemoExample;
