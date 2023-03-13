import React, { useState, useEffect } from "react";

import { useNode } from "@craftjs/core";
import {
  Button,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Dialog,
  DialogTitle,
  Alert,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

// TODO: bind customized event to the button (need to enter js function)
export interface MaterialButtonEventProps {
  open: boolean;
  currentFunction: string;
  onClose: (value: string) => void;
}
function MaterialButtonDialog(props: MaterialButtonEventProps) {
  const { open, onClose, currentFunction } = props;

  const handleClose = () => {
    onClose(currentFunction);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set MaterialButton Event</DialogTitle>
      <Alert severity="info">
        {" "}
        Note: Event must be written in javaScript format or otherwise can't be
        compiled
      </Alert>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        multiline
        value={currentFunction}
      ></TextField>
    </Dialog>
  );
}

export const MaterialButton = ({ size, variant, color, text }) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();
  return (
    <Button
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      color={color}
    >
      {text}
    </Button>
  );
};

/* Component Setting that show when selecting the component, 
   check the props of the corresponding mui elements and then
   setting up with template below. In this case we are modifying
   size, variant, and color props of a mui button
   https://mui.com/material-ui/react-button/
*/
const MaterialbuttonSetting = () => {
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
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
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
          >
            <MenuItem value="text">Text</MenuItem>
            <MenuItem value="outlined">Outlined</MenuItem>
            <MenuItem value="contained">Contained</MenuItem>
          </Select>
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={2}>
        <FormControl component="fieldset" size="small">
          <FormLabel component="legend">Color</FormLabel>
          <Select
            id="color-select"
            value={props.color}
            onChange={(e) => setProp((props) => (props.color = e.target.value))}
          >
            <MenuItem value="primary">Primary</MenuItem>
            <MenuItem value="secondary">Secondary</MenuItem>
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="error">Error</MenuItem>
          </Select>
        </FormControl>
      </Typography>
    </div>
  );
};

/* use Component.craft to pass default prop when creating the component
   and the setting which is used to modify the component
 */
MaterialButton.craft = {
  props: {
    size: "small",
    variant: "contained",
    color: "primary",
    text: "Click me",
    currentFunction: "",
  },
  related: {
    settings: MaterialbuttonSetting,
  },
};
