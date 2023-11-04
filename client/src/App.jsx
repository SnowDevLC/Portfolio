import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Projects, About, Detail } from './views';
import { NavBar } from './components';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
