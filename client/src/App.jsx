import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Search from './components/search/Search'
import { AuthorizeUser } from './middleware/auth'
 
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>      
      <Route exact path='/' element={<Navbar/>}/>
      <Route  path='/register' element={<Register/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/search' element={<AuthorizeUser><Search/></AuthorizeUser>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
