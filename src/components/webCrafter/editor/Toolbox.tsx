import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import { Element, useEditor } from "@craftjs/core";

import {
  Card,
  MaterialButton,
  Container,
  Text,
  MaterialTextField
} from "../pageComponents/exportComponents";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  const genDraggableIconFromRef = function(ref){
    return ref
  }
  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        columnSpacing={1}
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
              connectors.create(
                ref,
                <Element is={Container} padding={20} canvas />
              )
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
            ref={(ref) => connectors.create(ref, <MaterialTextField
              defaultValue="textField"
              size="small"
              variant="filled"
            />)}
          >
            TextField
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
