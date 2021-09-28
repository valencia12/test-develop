import axios from "axios";
import { login, logout } from "../actions/auth.action";


export const authentication = (demail, dpassword) => {
  return async (dispatch) => {
    axios.post(`https://prueba-api.nextia.mx/api/v1/login`, {
        user: {
          email: demail,
          password: dpassword
        },
      })
      .then(
        (res) => {
          dispatch(
            login(res.headers.authorization, res.data.email, res.data.member)
          );
        },
        (error) => {
          console.log(error);
        }
      );
  };
};


export const LogoutThunk = () => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`https://prueba-api.nextia.mx/api/v1/logout`); 
            console.log(res)
            dispatch(logout()); 
        } catch (error) {
            console.log(error)
        }
    }
}
