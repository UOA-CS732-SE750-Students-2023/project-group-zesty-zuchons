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

export const MaterialTextField = ({ defaultValue, size, variant /*完善下方setting panel时需同时将prop挂载到主元素上*/}) => {
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
    // 下方setting panel部分需完善，需要添加的可设置prop可参考 https://mui.com/material-ui/react-text-field/
    // 具体怎样完善可参考下方代码，基本是通过下拉组件选择当前prop可选择的项，并更新对应prop的值
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
  // 完善可配置prop后需要更新此处的默认prop
  props: {
    defaultValue: "Hi",
    size: "small",
    variant: "filled",
  },
  related: {
    settings: MaterialTextFieldSettings,
  },
};
