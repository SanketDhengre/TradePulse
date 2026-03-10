import React, { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we are receiving an auth redirect from the marketing site
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    const userStr = queryParams.get("user");

    if (token && userStr) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", userStr);
      // Clean up the URL so the token isn't sitting in the address bar
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
