import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { Element, useEditor } from "@craftjs/core";
import AppsIcon from "@mui/icons-material/Apps";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StyleIcon from "@mui/icons-material/Style";
import LabelIcon from '@mui/icons-material/Label';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

import {
  Card,
  MaterialButton,
  Container,
  Text,
  MaterialTextField,
  MaterialChip,
  MaterialSwitch,
} from "../pageComponents/exportComponents";

export const Toolbox = () => {
  const { connectors, query } = useEditor();
  const genDraggableIconFromRef = function (ref) {
    return ref;
  };

  const toolboxStyle = {
    header: {
      borderBottom: "1px solid #e0e0e0",
    },
    headerTitle: {
      fontSize: "15px",
    },
  };

  const DragIconButton = styled(IconButton)({
    "&:hover": {
      backgroundColor: "rgb(0 0 0 / 0%)",
      cursor: "move",
    },
  });

  return (
    <Box>
      <Grid container alignItems="center">
        <Grid item xs>
          <AppsIcon
            style={{
              position: "absolute",
              color: "#ffffff",
              paddingLeft: "2px",
              paddingTop: "2px",
              fontSize: "21px",
            }}
          />
          <Typography
            variant="subtitle1"
            style={{
              backgroundColor: "#1976d2",
              color: "#ffffff",
              paddingLeft: "28px",
              ...toolboxStyle.headerTitle,
            }}
          >
            Widgets
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        columnSpacing={0}
        p={1}
      >
        <Grid container direction="column" item>
          <Tooltip title="MaterialButton" placement="right">
            <DragIconButton
              aria-label="button"
              ref={(ref) =>
                connectors.create(
                  ref,
                  <MaterialButton
                    text="click me"
                    size="small"
                    variant="outlined"
                    color="primary"
                    disabled=""
                  />
                )
              }
            >
              <RadioButtonCheckedIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="text" placement="right">
            <DragIconButton
              aria-label="text"
              ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
            >
              <ShortTextIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="Container" placement="right">
            <DragIconButton
              aria-label="Container"
              ref={(ref) =>
                connectors.create(ref, <Element is={Container} canvas />)
              }
            >
              <ListAltIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="Card" placement="right">
            <DragIconButton
              aria-label="card"
              ref={(ref) => connectors.create(ref, <Card />)}
            >
              <StyleIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="TextField" placement="right">
            <DragIconButton
              aria-label="textfield"
              ref={(ref) =>
                connectors.create(
                  ref,
                  <MaterialTextField
                    defaultValue="textField"
                    size="small"
                    variant="filled"
                  />
                )
              }
            >
              <TextFieldsIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="Chip" placement="right">
            <DragIconButton
              aria-label="chip"
              ref={(ref) => connectors.create(ref, <MaterialChip />)}
            >
              <LabelIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

        <Grid container direction="column" item>
          <Tooltip title="Switch" placement="right">
            <DragIconButton
              aria-label="switch"
              ref={(ref) => connectors.create(ref, <MaterialSwitch />)}
            >
              <ToggleOffIcon />
            </DragIconButton>
          </Tooltip>
        </Grid>

      </Grid>
    </Box>
  );
};
