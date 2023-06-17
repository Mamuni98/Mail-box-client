import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../components/store/auth";
const useHttp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const authPostRequest = async (url, body, confirm = "") => {
    setIsLoading(true);
    if (
      body.email.length > 0 &&
      body.password.length > 0 &&
      body.password === confirm
    ) {
      try {
        const response = await axios.post(url, body);
        if (response) {
          alert("Successfully Signed Up");
        }
        history("/logIn");
      } catch (err) {
        const alertmsg = err.response.data.error.message;
        alert(alertmsg);
      }
      setIsLoading(false);
    } else if (body.email.length > 0 && body.password.length > 0) {
      try {
        const response = await axios.post(url, body);
        const token = response.data.idToken;
        dispatch(authActions.logIn(token));
        alert("Successfully Logged In");
        localStorage.setItem("email", body.email);
        history("/inbox");
      } catch (err) {
        const alertmsg = err.response.data.error.message;
        alert(alertmsg);
      }
      setIsLoading(false);
    } else {
      alert("Invalid input. Please check all the input fields again.");
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    authPostRequest,
  };
};
export default useHttp;
