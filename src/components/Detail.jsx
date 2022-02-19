import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTripslist } from "../features/auth/actions";

export const Detail = () => {

    let {num} = useParams();
    
    const dispatch = useDispatch();
  
    const [vahana, setVahana] = useState();

    const list = useSelector((state) => state.authState.trip_list);

    const getSingle = () => {

        axios.get(`http://localhost:2345/vehicles/particular/${num}`)
        .then((data) => {
            setVahana(data.data);
            dispatch(getTripslist(num));
        })
        .catch((err) => console.log(err))
    }


    useEffect(()=> {
        getSingle();
    } ,[])

    return(
        <div>
       
       {vahana? <div id='vahana'>
           <h2>Vehicle-type : {vahana.type}</h2>
           <h2>Register-No : {vahana.reg_NO}</h2>
           <h2>TotalTrips : {vahana.totalTrips}</h2>
       </div> : null}

       
       {list? <div>

           <h2>Trips List</h2>
               
   {list.map((e,i) => (

       <div key={i} id='ltrip'>
         <h3>{e.from+" "}to{" "+e.to+" "}</h3>

         <h3>filled capacity - {" "+e.capacity}</h3>
       
        </div>
       
   ))}  </div> : 'loading.....'}

        </div>
    )
}