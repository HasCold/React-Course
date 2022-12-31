// rafce  -->> Code Snippet for function-based component

import Footer from "./Footer"

const Header = () => {
    // Mutliple Element denge tu hame return keyword dena parega
    // In return all elements are JSX
    return(
        <div>  {/* Must be wrapped in a parent element or from a React.Fragment */}
        <h1>This is Header</h1>
        <p>This is Amazing tutorial</p>
        <Footer />
        </div>
    )
}


export default Header
// export {Footer};  // Object