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
} from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const MaterialSwitch = ({ label, value, labelPlacement }) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();

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
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return <div></div>;
};

MaterialSwitch.craft = {
  // 完善可配置prop后需要更新此处的默认prop
  props: {
    defaultValue: "Hi",
    size: "small",
    variant: "filled",
    labelPlacement: "end",
  },
  related: {
    settings: MaterialSwitchSettings,
  },
};
