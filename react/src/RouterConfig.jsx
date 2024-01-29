import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/LoginPortal/SignUp/SignUp';
import SignIn from './components/LoginPortal/SignIn/SignIn';
import ForgotPassword from './components/LoginPortal/ForgotPassword/ForgotPassword';


const RouterConfig = () => {
    return (
        <Routes>
            <Route path='*' element={<LandingPage />} />
            <Route path='/:InvalidRoute' element={<h1 className='text-danger'>page not found</h1>} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
    )
}

export default RouterConfig;