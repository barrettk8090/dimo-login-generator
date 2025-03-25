import Home from './components/Home'
import LoginConfirmation from './components/LoginConfirmation';
import DataExplorer from './components/DataExplorer';
import Footer from './components/Footer';
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
        <Route path="/data-explorer" element={<DataExplorer />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
