// components/user/Container.js
import React from "react";

import { useNode } from "@craftjs/core";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";

import { MuiColorInput } from "mui-color-input";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
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
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <MuiColorInput
          value={background || "#000"}
          onChange={(color) => {
            setProp((props) => (props.background = color));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    padding: 3,
  },
  related: {
    settings: ContainerSettings,
  },
};
