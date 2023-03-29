import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";

function App() {
  const [user, setUser] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={user ? <Home /> : <Navigate to={"/login"} />} />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="signup"
            element={!user ? <Signup /> : <Navigate to={"/"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
