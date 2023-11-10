import './App.css'
import {Route,Routes} from "react-router-dom";
import Login from './componets/Login'
import Register from './componets/Register';
import Form from './componets/Form';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const p = useSelector((state) => state.counter.status);

  return (
    <>
     <ToastContainer position="top-right"
autoClose={10000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route className='register' path='/signup' element={<Register/>}/>
    <Route path='/form' element={<Form/>}/>
    </Routes>
    
    </>
  )
}

export default App
