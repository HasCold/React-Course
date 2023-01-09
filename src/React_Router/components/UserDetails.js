import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {

    const {userID} = useParams();
  const [Data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  console.log(searchParams.get("age"));
  console.log(searchParams);

  useEffect(() => {
    async function getData(){
      const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userID}`);
      const data = await response.json();
      setData(data[0]);
      console.log(data);
    }
    getData();
    // window.alert("useEffect Called");  // It gives you a alert
  }, [userID])  // -->> [dependencies]

    const Reset = () => {
        setSearchParams({name : "Hasan", age : 20});   // useSearchParams allows you to access and manipulate the query parameter of the current URL 
    }

    return (
        <>
        <div className="userInfo">
            <h4>User ID :- {Data.id}</h4>
            <h4>
                User Image :- <img src={Data.imageUrl} />
            </h4>
            <h4>User Name :- {Data.firstName}</h4>
            {/* <h4>User LastName :-{Data.LastName}</h4> */}
            <h4>User Email :-{Data.email}</h4>
            <h4>User Contact Number :-{Data.contactnumber}</h4>
            <h4>User Age :-{Data.age}</h4>
            <h4>User Date of Birth :-{Data.dob}</h4>
            <h4>User Address :-{Data.address}</h4>
            <button style={{margin : "auto"}} onClick={Reset}>Reset</button>
        </div>
        </>
    )
}

export default UserDetails