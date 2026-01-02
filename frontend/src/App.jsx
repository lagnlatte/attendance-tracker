import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Confirm from './pages/Confirm'
import Confirmed from './pages/Confirmed'
import Dashboard from './pages/Dashboard'
import ShareSession from './pages/ShareSession'
import ViewEventGroup from './pages/ViewEventGroup'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/confirm" element={<Confirm />}></Route>
      <Route path="/confirmed" element={<Confirmed />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/share" element={<ShareSession />}></Route>
      <Route path="/view" element={<ViewEventGroup />}></Route>
    </Routes>
  )
}

export default App
