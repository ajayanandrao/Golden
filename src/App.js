import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import ProductDetail from './Home/SectionThree/ProductDetail/ProductDetail'
import OrderPage from './OrderPage/OrderPage'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'

const App = () => {
  return (
    <>
      <Router basename='/Golden'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='product/:id' element={<ProductDetail />} />

        </Routes>
      </Router>
    </>
  )
}

export default App