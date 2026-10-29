import Self from "./pages/Self/Self.jsx"
import Documentation from './pages/Documentation/Documentation.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {


  return (
      <Router>
          <Routes>
              <Route path='/' element={<Self/>} />
              <Route path='/documentation' element={<Documentation/>} />
          </Routes>
      </Router>
  )
}

export default App
