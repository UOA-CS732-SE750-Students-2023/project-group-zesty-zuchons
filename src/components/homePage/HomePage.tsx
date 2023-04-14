import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Button,
  FormControlLabel,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import jwt from 'jwt-decode';
import axios from 'axios';

//define the jwt decode object
interface googleUser {
  email: string;
  family_name: string;
  given_name: string;
}

export const Homepage = () => {
  const navigate = useNavigate();

  function jumpToCraftPage() {
    navigate("/craftpage");
  }
   async function loginProcess(credential) {
    const user = jwt<googleUser>(credential);
    console.log(user.email);
    //call api to create user when first login
    const response = await axios.post('http://localhost:3001/createUserInfo', {userEmail: user.email,familyName: user.family_name,givenName:user.given_name
  });
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
        <div
          className="header-breadcrumb"
          style={{ position: "absolute", right: "100px", top: "30px" }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="https://github.com/UOA-CS732-SE750-Students-2023/project-group-zesty-zuchons"
              target="_blank"
              rel="noopener"
            >
              Github
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="https://craft.js.org/"
              target="_blank"
              rel="noopener"
            >
              Resources
            </Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </div>
      </Grid>
      <Grid style={{ height: "90%" }}>
        <div style={{ width: "20%" }}>
          <GoogleLogin onSuccess={credentialResponse => {loginProcess(credentialResponse.credential)}} />
        </div>
        <div className="introduction"></div>
        <a href="https://www.freepik.com/free-vector/low-code-development-concept-illustration_19184596.htm#page=3&query=low%20code&position=6&from_view=keyword&track=ais">
          <img
            src="../../../assets/home.jpg"
            alt="Image by storyset on Freepik"
            style={{
              height: "700px",
              width: "700px",
              position: "absolute",
              right: "100px",
              top: "100px",
            }}
          ></img>
        </a>
      </Grid>
    </div>
  );
};
