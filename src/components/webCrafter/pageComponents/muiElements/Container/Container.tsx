// components/user/Container.js
import React, { useState, useEffect } from "react";

import { useNode } from "@craftjs/core";
import {
  Paper,
  FormControl,
  FormLabel,
  Slider,
  Typography,
  Divider,
  Chip
} from "@mui/material";

import { MuiColorInput } from "mui-color-input";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
    isActive,
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        background,
        padding: `${padding}px`,
        ...(isActive ? componentDefaultStyle.componentFocus : null),
      }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));
  return (
    <div>
      <Divider textAlign="left" color="#e0e0e0">
        <Chip size="small" variant="outlined" color="primary" label="styles" />
      </Divider>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Background</FormLabel>
          <MuiColorInput
            value={background || "#000"}
            onChange={(color) => {
              setProp((props) => (props.background = color));
            }}
          />
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={2}>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Padding</FormLabel>
          <Slider
            defaultValue={padding || 10}
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={50}
            onChange={(_, value) => setProp((props) => (props.padding = value))}
          />
        </FormControl>
      </Typography>
    </div>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    padding: 10,
  },
  related: {
    settings: ContainerSettings,
  },
};
