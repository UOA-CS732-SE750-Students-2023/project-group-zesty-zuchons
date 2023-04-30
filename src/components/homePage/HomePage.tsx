import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import GoogleButton from "react-google-button";
import { useNavigate, Navigate } from "react-router-dom";
import {
  Box,
  Grid,
  Button,
  FormControlLabel,
  Breadcrumbs,
  Link,
  Typography,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import jwt from "jwt-decode";
import axios from "axios";
import CheckIcon from "@mui/icons-material/Check";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import styles from "../../../assets/HomePage.module.css";

//define the jwt decode object
interface googleUser {
  email: string;
  family_name: string;
  given_name: string;
}

export const Homepage = () => {
  const navigate = useNavigate();

  function jumpToCraftPage(data) {
    //pass the data to page
    navigate("/craftpage", { state: data });
  }

  async function loginProcess(credential) {
    const user = jwt<googleUser>(credential);
    console.log(user.email);
    // call api to create user when first login
    const response = await axios.post("http://localhost:3001/createUserInfo", {
      userEmail: user.email,
      familyName: user.family_name,
      givenName: user.given_name,
    });
    console.log(response);
    // call api to get the user data for loading the saves
    // wait for insert into database then query the user info
    await new Promise((r) => setTimeout(r, 500));
    const response2 = await fetch(
      `http://localhost:3001/getUserInfo/${user.email}`
    );
    const data = await response2.json();
    console.log("data: ", data);
    console.log("loginProcess");
    jumpToCraftPage(data);
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
            top: "3px",
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
              className={styles.link}
              underline="hover"
              color="inherit"
              href="https://github.com/UOA-CS732-SE750-Students-2023/project-group-zesty-zuchons"
              target="_blank"
              rel="noopener"
            >
              Github
            </Link>
            <Link
              className={styles.link}
              underline="hover"
              color="inherit"
              href="https://craft.js.org/"
              target="_blank"
              rel="noopener"
            >
              Resources
            </Link>
          </Breadcrumbs>
        </div>
      </Grid>
      <Grid
        style={{ height: "85%", width: "100%", backgroundColor: "#f2fbff" }}
      >
        <div
          className="introduction"
          style={{
            paddingLeft: "50px",
            paddingTop: "50px",
            width: "45%",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              style={{ color: "#424242" }}
            >
              Open-source website builder powered by craft.js
            </Typography>
            <Typography
              sx={{ mt: 4, mb: 2, fontWeight: 'bold'  }}
              variant="h3"
              component="div"
              style={{ color: "#424242" }}
            >
              An extensible, light-weighted lowcode website builder
            </Typography>
            <List style={{ paddingLeft: "20px" }}>
              <ListItem>
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Quickly build Website with ready React-powered widgets"
                  style={{ color: "#424242" }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Customize and extend functionality with code"
                  style={{ color: "#424242" }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FolderOpenIcon />
                </ListItemIcon>
                <ListItemText
                  primary="open-source that allows developer to extend their own widget"
                  style={{ color: "#424242" }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoModeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Structured database for saveing your website and auto-loading feature for website for users"
                  style={{ color: "#424242" }}
                />
              </ListItem>
            </List>
            <Divider color="#e0e0e0"></Divider>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="subtitle1"
              component="div"
              style={{ color: "#424242" }}
            >
              login with google:
            </Typography>
            <div
              className="google-login"
              style={{ position: "relative", top: "-50px", left: "175px" }}
            >
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  loginProcess(credentialResponse.credential);
                }}
              />
            </div>
          </Grid>
        </div>

        <img
          src="../../../assets/home.png"
          style={{
            height: "550px",
            width: "700px",
            position: "absolute",
            right: "50px",
            top: "150px",
          }}
        ></img>
      </Grid>
      <Grid
        sx={{
          borderTop: 1,
          borderColor: "grey.300",
          height: "100%",
          overflow: "auto",
        }}
        style={{ height: "5%" }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{ color: "#424242", textAlign: "center", paddingTop: "10px" }}
        >
          Group project for team Zesty Zuchons for COMSCI732 in UOA, All rights
          reserved to Zixuan Wen, Mianmian Zheng, Yue Wang, Ziqi Zhong, Qiufan
          Qian
        </Typography>
      </Grid>
    </div>
  );
};
