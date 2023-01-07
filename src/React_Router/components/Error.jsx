import { useNavigate} from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();  // Ye navigate instance rakhega apke pichele route ka aur wahan apko bhej dega 

  return (
    <div>
        <h1 style={{color: "black"}}>404 Page Not Found</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Error