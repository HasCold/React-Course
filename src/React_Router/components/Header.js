import { Link, NavLink } from "react-router-dom"

const Header = () => {
  
    const navLinkStyles = ({ isActive }) => {
      return {
        fontWeight: isActive ? "bold" : "normal",
        // textDecoration: isActive ? "none" : "underline",
        color: isActive ? "red" : "white"
      };
    }

  return (
    <div className="header">
    <h1 style={{cursor: "pointer"}}>React Router</h1>

                      {/* Link :- <Link></Link> */}
                      {/* Is tarah se hum navigate karnenge aur hamari application dubara reload nahi hogi khali hamara ak component render hoga  */}
    <div className="info">
    <NavLink style={navLinkStyles} to={"/home"}>   
    <h2 style={{cursor: "pointer"}}>Home</h2>      
      </NavLink>

      <Link to={"/About"}>
    <h2 style={{cursor: "pointer"}}>About</h2>      
      </Link>

      <Link to={"/Contact"}>      
    <h2 style={{cursor: "pointer"}}>Contact</h2>
      </Link>
    </div>
    </div>
  )
}

export default Header
