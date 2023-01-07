import { Link, Outlet } from "react-router-dom"

const Contact = () => {
  return (
    <div className="contact">
    <Link to={"Insta"}><h3>Contact via Instagram</h3></Link>
    <Link to={"Mail"}><h3>Contact via Mail</h3></Link>
    <Outlet />
    </div>
  )
}

export default Contact