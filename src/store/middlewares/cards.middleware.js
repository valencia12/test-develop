import axios from "axios";
import { loadCards } from "../actions/cards.action";

//thunk
export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const cards = await axios.get(
        `https://prueba-api.nextia.mx/api/v1/member/wallets`
      );
      dispatch(loadCards(cards.data));
    } catch (error) {
      console.log(error);
    }
  };
};


