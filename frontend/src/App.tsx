import Home from './components/Home'
import LoginConfirmation from './components/LoginConfirmation';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-details" element={<LoginConfirmation />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
