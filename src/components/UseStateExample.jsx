/*** useState hook example ***/
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UseStateExample() {
  const [name, setName] = useState('');

  return (
    <>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <p className='pb-2'>Your name is being printed as you type: {name}</p>

      <div className='form-control'>
        <input
          type='text'
          placeholder='Enter your name'
          className='input'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
}

export default UseStateExample;
