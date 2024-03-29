import React, { useState } from "react";
import store from "../../../store/store";
import {
  setEditableTrue,
  setEditableFalse,
} from "../../../store/action/editable";
import { useEditor } from "@craftjs/core";

import {
  Box,
  Grid,
  Button,
  FormControlLabel,
  Switch,
  Alert,
  AlertTitle,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Header = ({ data }) => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function saveCanvasToServer() {
    //call the api to save user data into database
    const response = await axios
      .post("http://localhost:3001/updateUserInfo", {
        userEmail: data.userEmail,
        familyName: data.familyName,
        givenName: data.givenName,
        userData: query.serialize(),
      })
      .then((response) => {
        setOpen(true);
      });
    console.log(response);
    console.log(query.serialize());
  }

  function logout() {
    navigate("/");
  }
  // update editable state in redux for control usage
  function toggleEditable() {
    let canvasEditable = store.getState();

    actions.setOptions((options) => (options.enabled = !canvasEditable));
    if (!canvasEditable == true) {
      store.dispatch(setEditableTrue);
    } else {
      store.dispatch(setEditableFalse);
    }
  }
  let canvasEditable = store.getState();

  const TopbarButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#bbdefb",
    },
  });
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="header" sx={{ borderBottom: 1, borderColor: "grey.300" }}>
      <Grid container alignItems="left">
        <img
          src="../../../../assets/logo.svg"
          style={{ height: "30px", width: "30px" }}
        ></img>
        <img
          src="../../../../assets/title.svg"
          style={{ position: "absolute", left: "5px", top: "-22px" }}
        ></img>

        <TopbarButton
          size="small"
          startIcon={<PlayCircleOutlineIcon />}
          onClick={toggleEditable}
          style={{
            position: "absolute",
            right: "180px",
            backgroundColor: canvasEditable ? null : "#bbdefb",
          }}
        >
          Preview
        </TopbarButton>
        <TopbarButton
          size="small"
          startIcon={<SaveAltIcon />}
          onClick={saveCanvasToServer}
          style={{ position: "absolute", right: "100px" }}
        >
          Save
        </TopbarButton>
        <TopbarButton
          size="small"
          startIcon={<LogoutIcon />}
          onClick={logout}
          style={{ position: "absolute", right: "5px" }}
        >
          Logout
        </TopbarButton>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        style={{top:"24px"}}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Saving success</AlertTitle>
          You works have been saved successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};
