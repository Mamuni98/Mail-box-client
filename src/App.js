import LogIn from "./components/Authentication/LogIn";
import SignUp from "./components/Authentication/SignUp";
import Header from "./components/Navbar/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
function App() {
  return (
    <>
     <main>
      <Header />
    </main>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/logIn" element={ <LogIn />}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </>
   
  );
}

export default App;
