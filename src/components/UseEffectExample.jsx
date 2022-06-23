import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UseEffectExample() {
  const [useEffectCounter, setUseEffectCounter] = useState(0);
  const [btnClickCounter, setbtnClickCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect() rendered');
    setUseEffectCounter(useEffectCounter + 1); // to count useEffect renders
  }, [btnClickCounter]); // renders useEffect hook when dependencies are updated

  return (
    <>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useEffect Example</h1>
      <p className='mb-4 text-lg text-justify'>
        The <i>useEffect()</i> hook runs when the component is rendered. In this
        example, a counter inside the hook records how many times the component
        renders. When the button is clicked, a separate piece of state named{' '}
        <i>btnClickCounter</i>, also a dependency in <i>useEffect()</i>, is
        updated and causes the <i>useEffect()</i> to re-render.
      </p>

      <p className='mb-2 text-lg'>useEffect() rendered: {useEffectCounter}</p>
      <p className='mb-2 text-lg'>Button clicked: {btnClickCounter}</p>

      <div className='flex'>
        <div className='mt-4 '>
          <button
            className='btn btn-secondary shadow-xl text-base-100'
            onClick={(e) => {
              setbtnClickCounter(btnClickCounter + 1);
            }}
          >
            Click me!
          </button>
        </div>
      </div>
    </>
  );
}

export default UseEffectExample;
