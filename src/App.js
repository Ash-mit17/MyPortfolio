import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Index from './screens/home';
import About from './screens/about';
import Resume from './screens/resume';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />}/>
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
