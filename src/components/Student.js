// rafce -->> reactarrowfunctionexportcomponent
import Comp from "./Comp"
import propTypes from 'prop-types' // ES-7 React-Redux Snippet -->> impt 

const Student = (props) => {  // Get props 
  return (
    <> {/* React.Fragment -->> <></> used for self closing; child element enclosed in the parent element  */}
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name={props.name} />
    </>
  )
}

Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number
}
Student.defaultProps = {  // when something is not mentioned 
    name : "Name",
    age : 0
}

export default Student

// PropTypes Explanation

// In a React application, propTypes are used to document the intended types of properties passed to a component. They serve as a way to check that the properties used in a component are valid and provide a clear warning if they are not. This can be helpful for catching bugs in the application early on and for ensuring that components are used correctly.

// Using propTypes can also be helpful for other developers who may be working on the same codebase, as it documents the expected types of the component's properties. This can make it easier for them to understand how the component is intended to be used and can help prevent them from making mistakes when using the component.
