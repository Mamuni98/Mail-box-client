import axios from "axios";
import { sentMailActions } from "./sent-mail";

export const sentMailData = (sentMails) => {
  return async () => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      //console.log("sending mails to sentbox");
      const user = usermail.replace("@", "").replace(".", "");
      try {
        await axios.put(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-SentMails.json`,
          sentMails
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const receiveSentMailData = () => {
  return async (dispatch) => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      const user = usermail.replace("@", "").replace(".", "");
      //console.log(user);
      try {
        const response = await axios.get(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-SentMails.json`
        );

        if (response.data === undefined || response.data === null) {
          dispatch(sentMailActions.finalSentMailList([]));
        } else {
          dispatch(sentMailActions.finalSentMailList(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};
