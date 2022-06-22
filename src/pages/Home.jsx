import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='grid grid-cols-1'>
      <div className='mx-auto'>
        <h3 className='text-2xl font-bold mb-6 text-center'>
          Click to see an example of each hook below
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Link to='/UseStateExample'>
            <button className='btn btn-secondary w-full'>useState()</button>
          </Link>
          <Link to='/UseRefExample1'>
            <button className='btn btn-secondary w-full'>
              useRef() Example 1
            </button>
          </Link>
          <Link to='/UseRefExample2'>
            <button className='btn btn-secondary w-full'>
              useRef() Example 2
            </button>
          </Link>
          <Link to='/UseRefExample3'>
            <button className='btn btn-secondary w-full'>
              useRef() Example 3
            </button>
          </Link>
          <Link to='/UseMemoExample'>
            <button className='btn btn-secondary w-full'>useMemo()</button>
          </Link>
          <Link to='/UseCallbackExample'>
            <button className='btn btn-secondary w-full'>useCallback()</button>
          </Link>
          <Link to='/CustomHookExample1'>
            <button className='btn btn-secondary w-full'>
              Custom Hook - useFetch()
            </button>
          </Link>
          <Link to='/CustomHookExample2'>
            <button className='btn btn-secondary w-full'>
              Custom Hook - useLocalStorage()
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
