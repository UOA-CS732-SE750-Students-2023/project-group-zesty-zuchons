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
} from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialSwitch = ({ 
  label, 
  value, 
  labelPlacement,
}) => {
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
        value={value}
        control={<Switch />}
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
    value,
    label,
    labelPlacement
  } = useNode((node) => ({
    props: node.data.props,
    value: node.data.props.value,
    label: node.data.props.label,
    labelPlacement: node.data.props.labelPlacement,
  }));
  return(
    <div>
        <Typography component="div" variant="body1" mt={1}>
            <FormControl size="small" component="fieldset" fullWidth>
              <FormLabel component="legend">Value</FormLabel>
              <Select
                id="size-select"
                value={props.value}
                onChange={(e) =>
                  setProp((props) => (props.value = e.target.value))
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

    </div>)
  ;
};

MaterialSwitch.craft = {
  //default value of the Switch UI
  props: {
    defaultValue: "Hi",
    value: "small",
    labelPlacement: "end",
    label:"hi",
  },
  related: {
    settings: MaterialSwitchSettings,
  },
};
