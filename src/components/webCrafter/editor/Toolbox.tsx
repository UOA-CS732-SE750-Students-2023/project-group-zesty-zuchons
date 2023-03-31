import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import { Element, useEditor } from "@craftjs/core";

import {
  Card,
  MaterialButton,
  Container,
  Text,
  MaterialTextField,
} from "../pageComponents/exportComponents";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  const genDraggableIconFromRef = function (ref) {
    return ref;
  };

  const toolboxStyle = {
    header: {
      borderBottom: "1px solid #e0e0e0",
    },
    headerTitle: {
      fontSize: "15px",
    },
  };

  return (
    <Box>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography
            variant="subtitle1"
            style={{
              backgroundColor: "#1976d2",
              color: "#ffffff",
              paddingLeft: "8px",
              ...toolboxStyle.headerTitle,
            }}
          >
            Widgets
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        columnSpacing={1}
        p={2}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <Button
            variant="contained"
            ref={(ref) =>
              connectors.create(
                ref,
                <MaterialButton
                  text="click me"
                  size="small"
                  variant="outlined"
                  color="primary"
                  disabled=""
                />
              )
            }
          >
            button
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            variant="contained"
            ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          >
            Text
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            variant="contained"
            ref={(ref) =>
              connectors.create(ref, <Element is={Container} canvas />)
            }
          >
            Container
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            variant="contained"
            ref={(ref) => connectors.create(ref, <Card />)}
          >
            Card
          </Button>
        </Grid>
        <Grid container direction="column" item>
          <Button
            variant="contained"
            ref={(ref) =>
              connectors.create(
                ref,
                <MaterialTextField
                  defaultValue="textField"
                  size="small"
                  variant="filled"
                />
              )
            }
          >
            TextField
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
