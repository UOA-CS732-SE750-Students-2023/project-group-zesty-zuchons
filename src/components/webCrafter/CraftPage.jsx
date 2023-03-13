import React from "react";

import { Typography, Grid, Paper } from "@mui/material";

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
  return (
    <div>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <div>
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
          <Grid container spacing={3} style={{ paddingTop: "10px" }}>
            <Grid item xs={3}>
              <Paper>
              <Toolbox />
              </Paper>
            </Grid>
            <Grid item xs>
              <Frame>
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
              <Paper>
                <SettingsPanel />
              </Paper>
            </Grid>
          </Grid>
        </Editor>
      </div>
    </div>
  );
}
