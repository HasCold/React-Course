import React, {useContext} from "react"
import { AppState } from "../App";

const CompC = () => {
    const Appdata = useContext(AppState);
    return (
    <>
    <div className="compC">
    <div>compC</div>
    <h1>{Appdata.data1}</h1>
    <h1>Name : {Appdata.data2.name}</h1>
    <h1>Age : {Appdata.data2.age}</h1>
    </div>
    </>
  )
}

export default CompC