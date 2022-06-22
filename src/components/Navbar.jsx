import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content mb-4'>
      <div className='container'>
        <Link to='/' className='mx-auto'>
          <h1 className='text-4xl '>React Hooks Sandbox</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
