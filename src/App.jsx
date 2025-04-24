import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navabar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PayementSuccesssfull from './pages/PayementSuccesssfull';
import SignPage from './pages/SignPage';


function App() {


  return (
    <>

      <Header />

      <BrowserRouter>
        <Routes>
          {/* <Route path='/navbar' element={<Navbar/>}/> */}
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/payment' element={<PayementSuccesssfull/>}/>
          <Route path='/sign' element={<SignPage/>}/>
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
