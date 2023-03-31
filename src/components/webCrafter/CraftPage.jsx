import React from "react";

import { Grid, Paper, Box } from "@mui/material";

import { Toolbox } from "./editor/Toolbox";
import { SettingsPanel } from "./editor/SettingsPanel";
import { Topbar } from "./editor/Topbar";

import {
  MaterialButton,
  Container,
  Card,
  CardTop,
  CardBottom,
  Text,
  MaterialTextField,
} from "./pageComponents/exportComponents";

import { Editor, Frame, Element } from "@craftjs/core";

export default function CraftPage() {
  const craftPageStyles = {
    gridContainer: {
      height: "calc(100% - 50px)",
    },
    container: {
      height: "100%",
    },
    header: {
      height: "20px",
    },
  };
  // TODO: merge topbar component with the main canvas component
  return (
    <div className="craft-page" style={craftPageStyles.container}>
      <Editor
        resolver={{
          Card,
          MaterialButton,
          Text,
          Container,
          CardTop,
          CardBottom,
          MaterialTextField,
        }}
      >
        <Box
          className="header"
          sx={{ borderBottom: 1, borderColor: "grey.300" }}
        >
          <Grid container alignItems="left">
            <img
              src="../../../assets/logo.svg"
              style={{ height: "30px", width: "30px" }}
            ></img>
            <img
              src="../../../assets/title.svg"
              style={{ position: "absolute", left: "5px", top: "-22px" }}
            ></img>
          </Grid>
        </Box>

        <Topbar />
        <Grid container spacing={0} style={craftPageStyles.gridContainer}>
          <Grid item xs={2} sx={{ borderRight: 1, borderColor: "grey.300" }}>
            <Paper style={craftPageStyles.container}>
              <Toolbox />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Frame style={craftPageStyles.container}>
              <Element is={Container} padding={30} canvas>
                <Card />
                <MaterialButton size="small" variant="outlined">
                  Click
                </MaterialButton>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={5} canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={2} sx={{ borderLeft: 1, borderColor: "grey.300" }}>
            <Paper style={craftPageStyles.container}>
              <SettingsPanel
                className="setting-panel"
                style={{ height: "inherit" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
