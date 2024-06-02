import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import FoodDetails from './Components/Food/FoodDetails'

function App() {

  return (
   <>
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/food/:id' element={<FoodDetails />} />
    </Routes>
   </Router>
   </>
  )
}

export default App
