import { Login } from "@/components/Login";
import { SignUp } from "@/components/SignUp";
import { Route, Routes } from "react-router-dom";

export const LoginSignup = () => {
  return (
    <div className="container flex items-center justify-center py-20">
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};
