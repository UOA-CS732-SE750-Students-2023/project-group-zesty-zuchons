import React from "react";

import { Grid, Paper } from "@mui/material";

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
} from "./pageComponents/exportComponents";

import { Editor, Frame, Element } from "@craftjs/core";

export default function CraftPage() {
  
  const craftPageStyles = {
    container:{
      height: '100%'
    }
  };

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
        }}
      >
        <Topbar />
        <Grid container spacing={0} style={craftPageStyles.container}>
          <Grid item xs={2}>
            <Paper style={craftPageStyles.container}>
              <Toolbox />
            </Paper>
          </Grid>
          <Grid item xs={7}>
            <Frame style={craftPageStyles.container}>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <MaterialButton size="small" variant="outlined">
                  Click
                </MaterialButton>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={5} background="#eee" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
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
