import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

import {
  Typography,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Divider,
  Chip
} from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialSwitch = ({ label, color, labelPlacement, size }) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
    isActive,
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  return (
    // 完善下方setting panel时需同时将prop挂载到主元素上
    <div ref={(ref) => connect(drag(ref))}>
      <FormControlLabel
        control={<Switch size={size} color={color} />}
        label={label}
        labelPlacement={labelPlacement}
      />
    </div>
  );
};

const MaterialSwitchSettings = () => {
  const {
    actions: { setProp },
    props,
    label,
    labelPlacement,
    color,
    size,
  } = useNode((node) => ({
    props: node.data.props,
    size: node.data.props.size,
    label: node.data.props.label,
    labelPlacement: node.data.props.labelPlacement,
    color: node.data.props.color,
  }));
  return (
    <div>
      <Divider textAlign="left" style={{ paddingTop: "20px" }} color="#e0e0e0">
        <Chip size="small" variant="outlined" color="primary" label="props" />
      </Divider>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Size</FormLabel>
          <Select
            id="size-select"
            value={props.size}
            onChange={(e) => setProp((props) => (props.size = e.target.value))}
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
          <FormLabel component="legend">Color</FormLabel>
          <Select
            id="color-select"
            value={props.color}
            onChange={(e) => setProp((props) => (props.color = e.target.value))}
            style={componentDefaultStyle.settingPanelSelect}
          >
            <MenuItem value="default">Grey</MenuItem>
            <MenuItem value="primary">Blue</MenuItem>
            <MenuItem value="warning">Orange</MenuItem>
            <MenuItem value="success">Green</MenuItem>
          </Select>
        </FormControl>
      </Typography>

      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Label</FormLabel>
          <TextField
            id="label-input"
            value={props.label}
            onChange={(e) => {
              setProp((props) => (props.label = e.target.value));
            }}
            style={componentDefaultStyle.settingPanelTextArea}
          ></TextField>
        </FormControl>
      </Typography>

      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">LabelPlacement</FormLabel>
          <Select
            id="lp-select"
            value={props.labelPlacement}
            onChange={(e) =>
              setProp((props) => (props.labelPlacement = e.target.value))
            }
            style={componentDefaultStyle.settingPanelSelect}
          >
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="start">Start</MenuItem>
            <MenuItem value="bottom">Bottom</MenuItem>
            <MenuItem value="end">End</MenuItem>
          </Select>
        </FormControl>
      </Typography>
    </div>
  );
};

MaterialSwitch.craft = {
  //default value of the Switch UI
  props: {
    defaultValue: "Hi there",
    size: "small",
    labelPlacement: "end",
    label: "hi",
    color: "primary",
  },
  related: {
    settings: MaterialSwitchSettings,
  },
};
