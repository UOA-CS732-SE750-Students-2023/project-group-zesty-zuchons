import React from "react";
import { useEditor } from "@craftjs/core";

import { Box, Grid, Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import SaveAltIcon from "@mui/icons-material/SaveAlt";

export const Header = () => {
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  function saveCanvasToServer() {
    //TODO: save the serialized json of current canvas to backend
    console.log(query.serialize());
  }

  const TopbarButton = styled(Button)({
    '&:hover':{
      backgroundColor: '#bbdefb',
    }
  })
  
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
          startIcon={<SaveAltIcon />}
          onClick={saveCanvasToServer}
          style={{ position: "absolute", right: "5px" }}
        >
          Save
        </TopbarButton>
      </Grid>
    </Box>
  );
};
