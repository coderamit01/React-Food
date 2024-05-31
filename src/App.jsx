import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

function App() {

  return (
   <>
   <Router>
    <Header />
      <Routes>
        <Route path='' element={<Hero />} />
      </Routes>
   </Router>
   </>
  )
}

export default App
