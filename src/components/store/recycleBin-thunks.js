import axios from "axios";
import { recycleBinActions } from "./recycle-bin";

export const sentBinData = (binMails) => {
  return async () => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      const user = usermail.replace("@", "").replace(".", "");
      try {
        await axios.put(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-binMails.json`,
          binMails
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const receiveBinData = () => {
  return async (dispatch) => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      const user = usermail.replace("@", "").replace(".", "");
    
      try {
        const response = await axios.get(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-binMails.json`
        );

        if (response.data === undefined || response.data === null) {
          dispatch(recycleBinActions.finalBin([]));
        } else {
          dispatch(recycleBinActions.finalBin(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};
