import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';


const RouterConfig = () => {
    return (
        <Routes>
            <Route path='*' element={<LandingPage />} />
            <Route path='/:InvalidRoute' element={<h1 className='text-danger'>page not found</h1>} />
        </Routes>
    )
}

export default RouterConfig;