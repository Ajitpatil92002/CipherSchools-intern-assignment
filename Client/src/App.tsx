import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import { useAppSelector } from "./redux/hooks";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { userDetails } = useAppSelector((state) => state.user);
  console.log(import.meta.env.VITE_API_URL);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={userDetails ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="login"
            element={!userDetails ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="signup"
            element={!userDetails ? <Signup /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
