import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Confirm from './pages/Confirm'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/confirm" element={<Confirm />}></Route>
    </Routes>
  )
}

export default App
