import { Outlet, useLoaderData } from "react-router-dom"
import Category from "./Components/Category/Category"
import Featured from "./Components/Featured/Featured";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header"
import Navbar from "./Components/NavBar/Navbar"

function App() {
  
  
  return (
    <div>
      <div className="bg-purple-50">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-364px)">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      
      
      
    </div>
  )
}

export default App
