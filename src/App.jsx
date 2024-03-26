
import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <>
    <Sidebar/>
      <div className="main-content">
        <Navbar/>  
        <section style={{
          scrollBehavior: "smooth"
        }}>
          <Outlet/>
        </section>
      </div>
    </>
  )
}

export default App
