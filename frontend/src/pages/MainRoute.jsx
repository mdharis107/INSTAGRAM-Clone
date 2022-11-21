import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import HomePage from "./HomePage";
import PostAddingPage from "./PostAddingPage";
import UserDetailPage from "./UserDetailPage";

export const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDetailPage />} />
        <Route path="/addPost" element={<PostAddingPage />} />
        {/* <Route path='/' element={Top} /> */}
      </Routes>
    </div>
  );
};
