import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UseStateExample from './components/UseStateExample';
import UseReducerExample from './components/UseReducerExample';
import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomHookExample1 from './components/CustomHookExample1';
import CustomHookExample2 from './components/CustomHookExample2';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container pb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/UseStateExample' element={<UseStateExample />} />
          <Route path='/UseReducerExample' element={<UseReducerExample />} />
          <Route path='/UseRefExample1' element={<UseRefExample1 />} />
          <Route path='/UseRefExample2' element={<UseRefExample2 />} />
          <Route path='/UseRefExample3' element={<UseRefExample3 />} />
          <Route path='/UseMemoExample' element={<UseMemoExample />} />
          <Route path='/UseCallbackExample' element={<UseCallbackExample />} />
          <Route path='/CustomHookExample1' element={<CustomHookExample1 />} />
          <Route path='/CustomHookExample2' element={<CustomHookExample2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
