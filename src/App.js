import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp";
import Header from "./components/Navbar/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/Navbar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import Compose from "./components/Pages/Compose";
import SentBox from "./components/Pages/SentBox";
import { useEffect } from "react";
import { receiveSentMailData } from "./components/store/sentMail-thunks";
import { receiveInboxData } from "./components/store/inboxMail-thunks";
import Inbox from "./components/Pages/Inbox";
import MailRead from "./components/Pages/MailRead";
function App() {
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inbox");
    dispatch(receiveInboxData());
  }, [IsLoggedIn, dispatch]);

  useEffect(() => {
    console.log("sent");
    dispatch(receiveSentMailData());
  }, [IsLoggedIn, dispatch]);


  return (
    <>
      <main>
        <Header />
      </main>
      {IsLoggedIn && <SideBar />}
      <Routes>
        {!IsLoggedIn && <Route path="/" element={<SignUp />} />}
        {!IsLoggedIn && <Route path="/logIn" element={<LogIn />} />}
        <Route
          path="/compose"
          element={IsLoggedIn ? <Compose /> : <Navigate replace to="/" />}
        />
        <Route
          path="/inbox"
          element={IsLoggedIn ? <Inbox /> : <Navigate replace to="/" />}
        />
        <Route
          path="/inbox/:mailId"
          element={IsLoggedIn ? <MailRead/> : <Navigate replace to="/" />}
        />
        <Route
          path="/sentBox"
          element={IsLoggedIn ? <SentBox /> : <Navigate replace to="/" />}
        />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </>
  );
}

export default App;
