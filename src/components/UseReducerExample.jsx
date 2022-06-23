import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa';

// Reducer Function, typically in another file
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, counterStatus: true };
    case 'DECREMENT':
      return { count: state.count - 1, counterStatus: false };
    default:
      return state;
  }
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    counterStatus: null,
  });

  return (
    <>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useState Example</h1>
      <p className='mb-2 text-lg'>
        The <i>useReducer()</i> hook allows developers to change the value of
        multiple states using custom state logic. Here you can
        increment/decrement the counter state and change the text state using
        the <i>useReducer()</i> hook.
      </p>

      <p className='mb-2 text-md'>Count: {state.count}</p>
      <div className='flex mb-2'>
        <div className='grid grid-cols-2 gap-2'>
          <button
            className='btn btn-secondary text-lg text-base-100'
            onClick={() => {
              dispatch({ type: 'INCREMENT' });
            }}
          >
            {<FaChevronCircleUp />}
          </button>
          <button
            className='btn btn-secondary text-lg text-base-100'
            onClick={() => dispatch({ type: 'DECREMENT' })}
          >
            {<FaChevronCircleDown />}
          </button>
        </div>
      </div>

      {state.counterStatus === true ? (
        <p className='text-3xl'>Incrementing!</p>
      ) : state.counterStatus === false ? (
        <p className='text-3xl text-red-900'>Decrementing!</p>
      ) : (
        <p>Neither incrementing nor decrementing</p>
      )}
    </>
  );
}

export default UseReducerExample;
