import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
    <h1 style={{cursor: "pointer"}}>React Router</h1>

                      {/* Link :- <Link></Link> */}
                      {/* Is tarah se hum navigate karnenge aur hamari application dubara reload nahi hogi khali hamara ak component render hoga  */}
    <Link to={"/Home"}>   
    <h2 style={{cursor: "pointer"}}>Home</h2>      
      </Link>

      <Link to={"/About"}>
    <h2 style={{cursor: "pointer"}}>About</h2>      
      </Link>

      <Link to={"/Contact"}>      
    <h2 style={{cursor: "pointer"}}>Contact</h2>
      </Link>
    </div>
  )
}

export default Header
