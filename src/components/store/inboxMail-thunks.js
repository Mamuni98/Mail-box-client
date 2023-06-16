import axios from "axios";
import { inboxMailActions } from "./inbox-mail";
export const inboxMailData = (receiverMail, inboxMail) => {
  return async () => {
    if (receiverMail) {
      const receiver = receiverMail.replace("@", "").replace(".", "");
      try {
        const response = await axios.post(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${receiver}-inbox.json`,
          inboxMail
        );
        if (response) {
          alert("Successfully sent");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};
export const receiveInboxData = () => {
  return async (dispatch) => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      const user = usermail.replace("@", "").replace(".", "");

      try {
        const response = await axios.get(
          `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-inbox.json`
        );
        if (response.data === undefined || response.data === null) {
          dispatch(inboxMailActions.addInboxMails([]));
        } else {
          let indexArr = [];
          for (let key in response.data) {
            indexArr.push({
              id: key,
              ...response.data[key],
            });
          }
          dispatch(inboxMailActions.addInboxMails(indexArr));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const updateInboxMailData = (id, mail) => {
  return async () => {
    const usermail = localStorage.getItem("email");
    if (usermail) {
      const user = usermail.replace("@", "").replace(".", "");
    try {
      const response = await axios.put(
        `https://mail-box-6b06b-default-rtdb.firebaseio.com/${user}-inbox/${id}.json`,
        mail
      );
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  };
};
