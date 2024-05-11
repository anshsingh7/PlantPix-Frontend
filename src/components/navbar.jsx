import { seeding } from "../../src/assets/index";
import {NavLink} from "react-router-dom"
// import {useLocation} from "react-router-dom"

const Navbar = () => {
  

  return (
    <nav className="text-center grid grid-cols-3 gap-4 text-3xl ">
    <div>
   <NavLink to="/" className="nav-logo">
     <img src={seeding} alt="Logo" width="48" height="42"/>
   </NavLink>
    </div>
    <div className="text-center">
      <NavLink to="/plants" className="font-bold px-3 py-2 text-green rounded-lg hover:bg-slate-100 hover:text-green">Plants</NavLink>
      <NavLink to="/gallery" className="font-bold px-3 py-2 text-green rounded-lg hover:bg-slate-100 hover:text-green">Gallery</NavLink>
    </div>
    <div className="text-right">
      {/* <NavLink to="/signup" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sign up</NavLink> */}
      <NavLink to="/login" className="font-bold px-3 py-2 text-green rounded-lg hover:bg-slate-100 hover:text-green">Log in</NavLink>
    </div>
   </nav>
  )
}

export default Navbar
