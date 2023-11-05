import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import ProductDetail from './Home/SectionThree/ProductDetail/ProductDetail'
import OrderPage from './OrderPage/OrderPage'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'
import Hospital from './mehakar/Hospital/Hospital'
import HospitalList from './mehakar/Hospital/HospitalList'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='hospital' element={<Hospital />} />
          <Route path='hospital_List' element={<HospitalList />} />
          <Route path='product/:id' element={<ProductDetail />} />

        </Routes>
      </Router>
    </>
  )
}

export default App