import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

import {
  Typography,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Chip,
  FormControlLabel,
} from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialChip = ({size, variant, color}) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();
  return (
    <Chip
      ref={(ref) => connect(drag(ref))}
      label= "Chip"
      size={size}
      variant={variant}
      color={color}
      onClick = {() => alert('Clicked')}
    />
  );
};

const MaterialChipSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
            <FormLabel component="legend">Size</FormLabel>
            <Select
              id="size-select"
              value={props.size}
              onChange={(e) =>
                setProp((props) => (props.size = e.target.value))
              }
              style={componentDefaultStyle.settingPanelSelect}
            >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={1}>
            <FormControl size="small" component="fieldset" fullWidth>
              <FormLabel component="legend">Variant</FormLabel>
              <Select
                id="variant-select"
                value={props.variant}
                onChange={(e) =>
                  setProp((props) => (props.variant = e.target.value))
                }
                style={componentDefaultStyle.settingPanelSelect}
              >
                <MenuItem value="outlined">Outlined</MenuItem>
                <MenuItem value="contained">Contained</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          <Typography component="div" variant="body1" mt={1}>
            <FormControl component="fieldset" size="small" fullWidth>
              <FormLabel component="legend">Color</FormLabel>
              <Select
                id="color-select"
                value={props.color}
                onChange={(e) =>
                  setProp((props) => (props.color = e.target.value))
                }
                style={componentDefaultStyle.settingPanelSelect}
              >
                <MenuItem value="primary">Primary</MenuItem>
                <MenuItem value="secondary">Secondary</MenuItem>
                <MenuItem value="success">Success</MenuItem>
                <MenuItem value="error">Error</MenuItem>
              </Select>
            </FormControl>
          </Typography>
    </div>);
};

MaterialChip.craft = {
  props: {
    label: "Chip",
    size: "small",
    variant: "outlined",
    color: "primary",
  },
  related: {
    settings: MaterialChipSettings,
  },
};
