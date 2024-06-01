import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'

function App() {

  return (
   <>
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
    </Routes>
   </Router>
   </>
  )
}

export default App
