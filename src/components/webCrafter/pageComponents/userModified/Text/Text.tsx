import React, { useState, useEffect } from "react";

import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

import { Slider, FormControl, FormLabel, Typography, Divider, Chip } from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const Text = ({ text, fontSize, padding }) => {
  const {
    connectors: { connect, drag },
    isActive,
    actions: { setProp },
  } = useNode((node) => ({
    isActive: node.events.selected,
  }));

  const [editable, setEditable] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    !isActive && setEditable(false);
  }, [isActive]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={(e) => setEditable(true)}>
      <ContentEditable
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        disabled={!editable}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        style={{
          fontSize: `${fontSize}px`,
          padding: `${padding}px`,
          ...(hover ? componentDefaultStyle.componentHover : null),
          ...(editable ? componentDefaultStyle.componentFocus : null),
        }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    padding,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    padding: node.data.props.padding,
  }));

  return (
    <>
      <Divider textAlign="left" color="#e0e0e0">
        <Chip size="small" variant="outlined" color="primary" label="styles" />
      </Divider>
      <Typography component="div" variant="body1" mt={1}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Font size</FormLabel>
          <Slider
            value={fontSize || 7}
            step={1}
            min={1}
            max={50}
            valueLabelDisplay="auto"
            onChange={(_, value) => {
              setProp((props) => (props.fontSize = value));
            }}
          />
        </FormControl>
      </Typography>
      <Typography component="div" variant="body1" mt={2}>
        <FormControl size="small" component="fieldset" fullWidth>
          <FormLabel component="legend">Padding</FormLabel>
          <Slider
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
    </>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
    padding: 10,
  },
  related: {
    settings: TextSettings,
  },
};
