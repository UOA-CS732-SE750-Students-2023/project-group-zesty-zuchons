import React from "react";
import store from "../../../store/store";
import {
  setEditableTrue,
  setEditableFalse,
} from "../../../store/action/editable";
import { useEditor } from "@craftjs/core";

import { Box, Grid, Button, FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const navigate = useNavigate();
  function saveCanvasToServer() {
    //TODO: save the serialized json of current canvas to backend
    console.log(query.serialize());
  }

  function logout() {
    navigate("/");
  }

  function toggleEditable(value, actions) {
    actions.setOptions((options) => (options.enabled = value));
    if (value == true) {
      store.dispatch(setEditableTrue);
    } else if (value == false) {
      store.dispatch(setEditableFalse);
    } else {
      store.dispatch(setEditableTrue);
    }
  }

  const TopbarButton = styled(Button)({
    "&:hover": {
      backgroundColor: "#bbdefb",
    },
  });


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
        <FormControlLabel
          control={
            <Switch
              checked={enabled}
              onChange={(_, value) => {
                toggleEditable(value, actions);
              }}
            />
          }
          label="Enable"
          style={{ position: "absolute", right: "150px" }}
        />
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
    </Box>
  );
};
