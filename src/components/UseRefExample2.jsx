/*** useRef is used here for renders and prev state ***/
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UseRefExample2() {
  const [name, setName] = useState('');
  const renders = useRef(1);
  const prevName = useRef();

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useRef Example 2</h1>
      <h3 className='text-secondary'>
        Check how many times this component gets rendered and its previous state
      </h3>
      <br />
      <p>Prev State: {prevName.current}</p>
      <p>Renders: {renders.current}</p>
      <input
        type='text'
        className='form-control mb-3'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
export default UseRefExample2;
