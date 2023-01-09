import CompB from "./compB"

const CompA = (props) => {
  return (
    <>
    <div className="compA">
    <div>compA</div> 
    <CompB />
    </div>
    </>
  )
}

export default CompA