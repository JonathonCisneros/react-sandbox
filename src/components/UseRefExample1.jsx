/*** useRef is used here to manipulate elements ***/
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current); // Displays input element
    inputRef.current.value = "Ah ha! I've taken over this input!"; // Will display text if nothing is typed in input
    inputRef.current.style.backgroundColor = 'gold'; // Changes input background color on submit
    paraRef.current.innerText = 'Goodbye from paragraph!'; // Changes text in p element
  };

  return (
    <div>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>useRef Example 1</h1>
      <h3 className='text-secondary'>
        Use <i>useRef()</i> to change elements. Try hitting the submit button.
        Click the text <i>Hello from paragraph!</i>{' '}
      </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='mb-2 form-control'
        />
        <br />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <br />
        <br />
        <p
          onClick={() => {
            inputRef.current.focus();
            paraRef.current.innerText =
              'Input is now focused and my text has changed.';
          }}
          ref={paraRef}
        >
          Hello from paragraph!
        </p>
      </form>
    </div>
  );
}
export default UseRefExample1;
