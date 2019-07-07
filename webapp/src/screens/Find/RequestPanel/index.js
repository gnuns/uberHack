import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

import RequestInputs from "./RequestInputs";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: "52px",
    width: "100%",
    height: "70px",
    padding: "0 15px"
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Tooltip title="Em breve!">
      <Paper className={classes.root}>
        <RequestInputs />
      </Paper>
    </Tooltip>
  );
}
