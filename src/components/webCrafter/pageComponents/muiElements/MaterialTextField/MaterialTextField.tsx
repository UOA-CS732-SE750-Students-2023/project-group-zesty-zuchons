import React, { useState, useEffect } from "react";
import { useNode } from "@craftjs/core";

import {
  Typography,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextField,
  Slider,
  Divider,
  Chip,
  
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialTextField = (
  { 
    defaultValue, 
    size, 
    variant, /*完善下方setting panel时需同时将prop挂载到主元素上*/
    padding,
    margin,
    color,
    bgColor,
    label,
  }) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();

  return (
    // 完善下方setting panel时需同时将prop挂载到主元素上
    <TextField
      ref={(ref) => connect(drag(ref))}
      size={size}
      variant={variant}
      defaultValue={defaultValue}
      color={color}
      label={label}
      style={{
        padding: `${padding}px`,
        margin: `${margin}px`,
        background: `${bgColor}`,
      }}
    />
  );
};

const MaterialTextFieldSettings = () => {
  const {
    actions: { setProp },
    padding,
    margin,
    bgColor,
    props,
  } = useNode((node) => ({
    props: node.data.props,
    padding: node.data.props.padding,
    margin: node.data.props.margin,
    bgColor: node.data.props.bgColor,
  }));
  return (
    // 下方setting panel部分需完善，需要添加的可设置prop可参考 https://mui.com/material-ui/react-text-field/
    // 具体怎样完善可参考下方代码，基本是通过下拉组件选择当前prop可选择的项，并更新对应prop的值
    <div>
      <Divider
        textAlign="left"
        style={{ paddingTop: "20px" }}
        color="#e0e0e0"
      >
        <Chip
          size="small"
          variant="outlined"
          color="primary"
          label="props"
        />
      </Divider>

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
            <MenuItem value="secondary">Secondary</MenuItem>
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
          </Select>
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">label value</FormLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={props.label}
            onChange={(e) => {
              setProp((props) => (props.label = e.target.value));
            }}
            style={componentDefaultStyle.settingPanelTextArea}
          ></TextField>
        </FormControl>
      </Typography>

      <Divider
        textAlign="left"
        style={{ paddingTop: "20px" }}
        color="#e0e0e0"
      >
        <Chip
          size="small"
          variant="outlined"
          color="primary"
          label="styles"
        />
      </Divider>
      
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Padding</FormLabel>
          <Slider
            style={componentDefaultStyle.settingPanelSlide}
            value={padding || 10}
            step={1}
            min={1}
            max={20}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              setProp((props) => (props.padding = value));
            }}
          />
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Margin</FormLabel>
          <Slider
            style={componentDefaultStyle.settingPanelSlide}
            value={margin || 5}
            step={1}
            min={1}
            max={20}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              setProp((props) => (props.margin = value));
            }}
          />
        </FormControl>
      </Typography>
      
      <Typography component="div" variant="body1" mt={1}>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Background Color</FormLabel>
          <MuiColorInput
            value={bgColor || "#fff"}
            onChange={(color) => {
              setProp((props) => (props.bgColor = color));
            }}
          />
        </FormControl>
      </Typography>

    </div>
  );
};
 
MaterialTextField.craft = {
  // 完善可配置prop后需要更新此处的默认prop
  props: {
    defaultValue: "Hi",
    size: "small",
    variant: "filled",
    color: "success",
    label: "label",
  },
  related: {
    settings: MaterialTextFieldSettings,
  },
};
