import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Work, Info, Detail } from './views';
import { NavBar } from './components';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
          <Route exact path='/' element={<Info />} />
          <Route exact path='/projects' element={<Work />} />
          <Route exact path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
