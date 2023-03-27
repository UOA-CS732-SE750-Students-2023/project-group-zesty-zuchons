import React, { useState, useEffect } from "react";

import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

import { Slider, FormControl, FormLabel } from "@mui/material";

import componentDefaultStyle from "../../componentDefaultStyle.js";

export const Text = ({ text, fontSize }) => {
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
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => setEditable(true)}
    >
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
          ...(hover ? componentDefaultStyle.componentHover : null),
          ...(editable ? componentDefaultStyle.componentFocus : null)
        }}
      />
    </div>
  );
};

const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>
    </>
  );
};

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20,
  },
  rules: {
    canDrag: (node) => node.data.props.text != "Drag",
  },
  related: {
    settings: TextSettings,
  },
};
