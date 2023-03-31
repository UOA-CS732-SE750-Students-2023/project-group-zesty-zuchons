import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();

  function jumpToCraftPage() {
    navigate("/craftpage");
  }
  function loginProcess() {
    console.log("loginProcess");
    jumpToCraftPage();
  }

  //TODO: need to modify to call a login api and then jump to craft page
  return (
    <div>
      test homepage
      <Button onClick={loginProcess}>jump to craftpage</Button>
    </div>
  );
};
