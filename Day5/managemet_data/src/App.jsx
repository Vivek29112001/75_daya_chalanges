import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Growth from './pages/Growth'
import Apply from './pages/Apply'
import Interview from './pages/Interview'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Summary from './data/Summary'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<DashBoard />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/interview" element={<Interview/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/summary" element={<Summary/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
