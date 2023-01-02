// rafce  -->> Code Snippet for function-based component

import Footer from "./Footer"

const Header = () => {
    // Mutliple Element denge tu hame return keyword dena parega
    // In return all elements are JSX
    return(
        <div className="header">  {/* Must be wrapped in a parent element or from a React.Fragment */}
        <h1 style={{color: "blue", backgroundColor: "green"}}>This is Header</h1> {/* Inline CSS */}
        <p>This is Amazing tutorial</p>
        <Footer />
        </div>
    )
}


export default Header
// export {Footer};  -- >>> Object