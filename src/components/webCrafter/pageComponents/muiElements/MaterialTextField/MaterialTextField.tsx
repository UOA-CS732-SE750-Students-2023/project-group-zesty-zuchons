import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

import {
  Typography,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialTextField = ({ defaultValue, size, variant }) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();

  return (
    <TextField
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      defaultValue={defaultValue}
    />
  );
};

const MaterialTextFieldSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div>
      <Typography component="div" variant="body1" mt={2}>
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Size</FormLabel>
          <Select
            id="size-select"
            value={props.size}
            onChange={(e) => setProp((props) => (props.size = e.target.value))}
            style={componentDefaultStyle.settingPanelSelect}
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
          </Select>
        </FormControl>
      </Typography>

      <Typography component="div" variant="body1" mt={2}>
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Variant</FormLabel>
          <Select
            id="variant-select"
            value={props.variant}
            onChange={(e) =>
              setProp((props) => (props.variant = e.target.value))
            }
            style={componentDefaultStyle.settingPanelSelect}
          >
            <MenuItem value="filled">Filled</MenuItem>
            <MenuItem value="outlined">Outlined</MenuItem>
            <MenuItem value="standard">Standard</MenuItem>
          </Select>
        </FormControl>
      </Typography>
    </div>
  );
};

MaterialTextField.craft = {
  props: {
    defaultValue: "Hi",
    size: "small",
    variant: "filled",
  },
  related: {
    settings: MaterialTextFieldSettings,
  },
};
