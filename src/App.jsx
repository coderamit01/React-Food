import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import FoodDetails from './Components/Food/FoodDetails'
import SignUp from './Components/Auth/SignUp'
import SignIn from './Components/Auth/SignIn'
import Shipment from './Components/Shipment/Shipment'
import Footer from './Components/Footer/Footer'

function App() {
  const location = useLocation();
  const noHeaderFooterPath = ['/signup','/signin'];

  return (
   <>
    {!noHeaderFooterPath.includes(location.pathname) && <Header />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/food/:id' element={<FoodDetails />} />
      <Route path='/shipment' element={<Shipment />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
    {/* {!noHeaderFooterPath.includes(location.pathname) && <Footer />} */}
   </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;
