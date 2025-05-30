import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogEditor from "./pages/Blog-Editing/BlogEditor.jsx"; // Import the Blog Edit page
import Login from "./pages/SignUP_and_Login/login.jsx";
import SignUpCard from "./pages/SignUP_and_Login/SignUp.jsx";
import Home from "./pages/Home/Home.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Error404 from "./pages/404/404.jsx";
import SingleBlogPage from "./pages/SingleBlogPage/SingleBlogPage.jsx"
import AccountProfilePage from "./pages/Profile/AccountProfile.jsx"
import ProfilePage from "./pages/Profile/OwnProfile.jsx";
import EmailVerification from "./pages/SignUP_and_Login/EmailVerification.jsx";
import BlogWritingPage from "./pages/Blog-writing/BlogWriting.jsx"
import SearchResults from "./pages/SearchResults/SearchResults.jsx";
import ForgotPassword from "./pages/SignUP_and_Login/ForgotPassword.jsx";
import ResetPassword from "./pages/SignUP_and_Login/ResetPassword.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-blog" element={<BlogEditor />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignUpCard />} />
        <Route path="/otp" element={<EmailVerification />} />
        <Route path="/write" element={<BlogWritingPage />} />
        <Route path="/account/:id" element={<AccountProfilePage />} />
        <Route path="*" element={<h1><Error404 /></h1>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );


}

export default App;
