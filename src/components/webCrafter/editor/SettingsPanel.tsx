import React from "react";
import { useEditor } from "@craftjs/core";
import {
  Chip,
  Box,
  Typography,
  Grid,
  Button,
  FormControl,
} from "@mui/material";

export const SettingsPanel = () => {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
    };
  });

  const settingsPanelStyle = {
    
  }

  return selected ? (
    <Box px={2} py={2}>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <Box pb={2}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="subtitle1">Selected</Typography>
              </Grid>
              <Grid item>
                <Chip size="small" color="primary" label={selected.name} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Box pb={2}>
            <Grid item xs>
              <Typography variant="subtitle1">Prop</Typography>
            </Grid>
          </Box>
        </Grid>

        <FormControl size="small" component="fieldset">
          {selected.settings && React.createElement(selected.settings)}
          {selected.isDeletable ? (
            <div style={{ paddingTop: "20px" }}>
              <Button
                variant="contained"
                size="large"
                color="error"
                onClick={() => {
                  actions.delete(selected.id);
                }}
              >
                Delete
              </Button>
            </div>
          ) : null}
        </FormControl>
      </Grid>
    </Box>
  ) : null;
};
