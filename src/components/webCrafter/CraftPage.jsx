import React from "react";

import { Grid, Paper, Box, Typography} from "@mui/material";

import { Toolbox } from "./editor/Toolbox";
import { SettingsPanel } from "./editor/SettingsPanel";
import { Header } from "./editor/Header";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

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
      height: "100%",
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
        <Header />

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
              <Grid
                container
                alignItems="center"
                style={{ borderBottom: "1px solid #e0e0e0" }}
              >
                <Grid item xs>
                  <Typography
                    variant="subtitle1"
                    style={{
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      paddingLeft: "8px",
                      fontSize: "15px",
                    }}
                  >
                    Setting panel
                  </Typography>
                </Grid>
              </Grid>
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
