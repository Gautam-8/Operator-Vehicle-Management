import { LOGIN, PARTICULAR } from "./actionTypes"

const init = {
    auth : false,
    trip_list : false,
 
}

export const reducer = (state = init , {type , payload}) => {

    switch(type){

        case LOGIN : 
        return {
            ...state,
            auth : payload
        }

        case PARTICULAR : 
        return {
            ...state,
            trip_list : payload,
        }
       

        default :
        return state;
    }

}