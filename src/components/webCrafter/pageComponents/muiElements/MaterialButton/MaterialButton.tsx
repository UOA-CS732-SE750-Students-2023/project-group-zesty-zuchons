import React, { useState, useEffect } from "react";

import { useNode } from "@craftjs/core";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

export const MaterialButton = ({
  size,
  variant,
  color,
  text,
  currentFunction,
}) => {
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
      onClick={function () {
        let func = new Function(currentFunction);
        return func();
      }}
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
  const [selectedBtn, setSelectedBtn] = React.useState(1);
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <ButtonGroup disableElevation variant="contained" color="primary">
        <Button
          color={selectedBtn === 1 ? "primary" : "inherit"}
          onClick={() => setSelectedBtn(1)}
        >
          Props
        </Button>
        <Button
          color={selectedBtn === 2 ? "primary" : "inherit"}
          onClick={() => setSelectedBtn(2)}
        >
          Event
        </Button>
      </ButtonGroup>

      {selectedBtn == 1 ? (
        <div>
          <Typography component="div" variant="body1" mt={2}>
            <FormControl size="small" component="fieldset">
              <FormLabel component="legend">Size</FormLabel>
              <Select
                id="size-select"
                value={props.size}
                onChange={(e) =>
                  setProp((props) => (props.size = e.target.value))
                }
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
                onChange={(e) =>
                  setProp((props) => (props.color = e.target.value))
                }
              >
                <MenuItem value="primary">Primary</MenuItem>
                <MenuItem value="secondary">Secondary</MenuItem>
                <MenuItem value="success">Success</MenuItem>
                <MenuItem value="error">Error</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </div>
      ) : (
        <div>
          <Typography component="div" variant="body1" mt={2}>
            <FormControl component="fieldset" size="small">
              <FormLabel component="legend">Click Event</FormLabel>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                multiline
                value={props.currentFunction}
                onChange={(e) => {
                  setProp((props) => (props.currentFunction = e.target.value));
                }}
              ></TextField>
            </FormControl>
          </Typography>
        </div>
      )}
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
    currentFunction: "console.log('hi')",
  },
  related: {
    settings: MaterialbuttonSetting,
  },
};
