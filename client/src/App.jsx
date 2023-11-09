import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Projects, About } from './views';
import { Footer, NavBar } from './components';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
