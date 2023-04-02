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

export const MaterialChip = ({}) => {
  const {
    // declare connector in useNode() to enable drag for the component
    connectors: { connect, drag },
  } = useNode();
  return (
    <div>
      <Chip></Chip>
    </div>
  );
};

const MaterialChipSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return <div></div>;
};

MaterialChip.craft = {
  // 完善可配置prop后需要更新此处的默认prop
  props: {
    //todo
  },
  related: {
    settings: MaterialChipSettings,
  },
};
