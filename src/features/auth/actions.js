import {LOGIN,  PARTICULAR} from "./actionTypes";
import axios from "axios";

export const loginUser = (data) => {
    return{
        type : LOGIN,
        payload:data 
    }
}

export const getParticular = (data) => {
    return{
        type : PARTICULAR,
        payload : data
    }
}

export const getTripslist = (num) => (dispatch) => {

     axios.get(`http://localhost:2345/trips/${num}`)
        .then((data) => {
           //console.log(data.data);
           dispatch(getParticular(data.data));
        
        })
        .catch((err) => console.log(err.message))
    
}





