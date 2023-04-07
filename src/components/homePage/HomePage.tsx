import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Button, FormControlLabel } from "@mui/material";
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
    <div className="homepage" style={{ height: "100%", width: "100%" }}>
      <Grid
        className="homepage-header"
        item
        alignItems="left"
        xs={2}
        sx={{
          borderBottom: 1,
          borderColor: "grey.300",
          height: "100%",
          overflow: "auto",
        }}
        style={{ height: "10%", width: "100%" }}
      >
        <img
          src="../../../assets/logo.svg"
          style={{
            height: "70px",
            width: "70px",
            position: "absolute",
            left: "100px",
            top: "-3px",
          }}
        ></img>
        <img
          src="../../../assets/title.svg"
          style={{
            position: "absolute",
            left: "143px",
            top: "-8px",
            height: "90px",
          }}
        ></img>
        <div></div>
      </Grid>
      <Grid style={{ height: "90%" }}>
        <Button onClick={loginProcess}>jump to craftpage</Button>
        <div className="introduction">
          
        </div>
        <a href="https://www.freepik.com/free-vector/low-code-development-concept-illustration_19184596.htm#page=3&query=low%20code&position=6&from_view=keyword&track=ais">
          <img
            src="../../../assets/home.jpg"
            alt="Image by storyset on Freepik"
            style={{height: "700px", width:"700px", position:"absolute", right:"100px", top:"100px"}}
          ></img>
        </a>
      </Grid>
    </div>
  );
};
