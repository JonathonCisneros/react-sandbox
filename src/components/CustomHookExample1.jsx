/*** Custom hook, useFetch, fetches data from a url ***/
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  // state and ref used for show/hide button
  const [showList, setShowList] = useState(false);
  const btnRef = useRef();

  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  console.log(data);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <Link to='/'>
        <button className='btn btn-outline mb-4'>Back to home</button>
      </Link>

      <h1 className='text-xl font-bold mb-2'>
        Custom Hook - <i>useFetch()</i>
      </h1>
      <h3 className='text-secondary'>
        We created a <i>useFetch()</i> hook in a separate .js file and called it
        in this component. This hook fetches data from a url and displays it in
        this component. Here, we called post titles from{' '}
        <a
          href='https://jsonplaceholder.typicode.com/posts'
          target='_blank'
          rel='noreferrer'
        >
          jsonplaceholder.typicode.com/posts
        </a>
        .
      </h3>
      <br />
      <button
        onClick={() => {
          showList ? setShowList(false) : setShowList(true);
          if (btnRef.current.innerText === 'Show List')
            btnRef.current.innerText = 'Hide List';
          else btnRef.current.innerText = 'Show List';
        }}
        className='btn btn-secondary'
        ref={btnRef}
      >
        Show List
      </button>
      <br />
      <br />
      {showList &&
        data.map((post) => (
          <p key={post.id}>
            Post Title {post.id}:{' '}
            <b className='text-capitalize italic'>{post.title}</b>
          </p>
        ))}
    </div>
  );
}

export default CustomHookExample1;
