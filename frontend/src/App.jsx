import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  )
}

export default App
