import axios from "axios";
import { loadBenevits } from "../actions/benevits.action";


//thunk

export const fetchBenevits = () => {
    //GetState accede al store
    return (dispatch, getState) => {
      
        const authState = getState().auth; 
         const token = {
            headers: {
                'Authorization': authState.authorization
            }
        }
            axios.get(`https://prueba-api.nextia.mx/api/v1/member/landing_benevits`,
            token
        ).then(res => {
            dispatch(loadBenevits(res.data))
            //console.log(res.data, "Data guardada");
        }).catch(e => {
            console.log(e + " ERRORssA");
        }); 
    };
};