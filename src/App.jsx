import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from "./Components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./Components/LoginPopup/LoginPopup"
import SearchBar from "./Components/SearchBar"



const App = () => {

  const [showLogin,setShowLogin] = useState(false);




  return (

    <>

      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>:<></>}

    <div className="app">
      
      <Navbar setShowLogin={setShowLogin}/>
      <SearchBar/>
      <Routes>

      < Route path='/' element={<Home/>} />
      < Route path='/cart' element={<Cart/>} />
      < Route path='/order' element={<PlaceOrder/>} />

      </Routes>

    </div>
    <Footer/>

    </>
  )
}

export default App
