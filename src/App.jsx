import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navabar';
import Home from './pages/Home';


function App() {


  return (
    <>

      <Header />

      <BrowserRouter>
        <Routes>
          {/* <Route path='/navbar' element={<Navbar/>}/> */}
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
