/*** useState hook example ***/
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UseStateExample() {
  const [name, setName] = useState('No name set');

  return (
    <>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useState Example</h1>
      <p className='mb-2 text-lg'>
        The <i>useState()</i> hook allows developers to change the value (state)
        of a variable that uses a function.
      </p>

      <p className='pb-2'>Current name state: {name}</p>

      <div className='form-control'>
        <input
          type='text'
          placeholder='Enter your name'
          className='input'
          onChange={(e) => setName('Hello there, ' + e.target.value)}
        />
      </div>
    </>
  );
}

export default UseStateExample;
