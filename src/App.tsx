import { Routes, Route, Navigate} from "react-router-dom";
import LoginPersonal from "./pages/LoginPersonal"
import LoginBusiness from './pages/LoginBusiness';
import LoginBusinessManager from './pages/LoginBussinessManager';
import PageDoesNotExist from './pages/PageDoesNotExist';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={"/personal"} replace />} />
      <Route path='/personal' element={<LoginPersonal/>} />
      <Route path='/business' element={<LoginBusiness/>} />
      <Route path='/manager' element={<LoginBusinessManager/>} />
      <Route path='/PageDoesNotExist' element={<PageDoesNotExist/>}/>
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
    </Routes>
  )
}

export default App
