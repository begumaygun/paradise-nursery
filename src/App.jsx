
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import CartItem from './pages/CartItem.jsx'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/cart' element={<CartItem/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
