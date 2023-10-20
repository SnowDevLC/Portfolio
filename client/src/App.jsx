import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Work, Info, Detail } from './views';

function App() {

  return (
    <>
      <Routes>
          <Route exact path='/' element={<Work />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
