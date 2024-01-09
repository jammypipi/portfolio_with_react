import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';


function App() {

  const Location = useLocation();
  console.log(Location);

  return (
    <div className="App">
    
      <Navbar />

      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      
    </div>
  );

}

export default App;
