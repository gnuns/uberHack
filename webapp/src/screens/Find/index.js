import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import GoogleMap from "google-map-react";

import AddressBar from "./AddressBar";
import RequestPanel from "./RequestPanel/index.js";

// Usar para transições de tela:
// https://voronianski.github.io/react-swipe/demo/?continuous=true
// https://material-ui.com/components/transitions/

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    position: "relative",
    backgroundColor: "#f7f7f7" || "#ffffff",
    paddingBottom: "56px",
    overflowX: "hidden"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: 0,
    position: "fixed",
    bottom: 0,
    width: "100%",
    height: "56px"
  },
  button: {
    margin: 0,
    borderRadius: 0,
    textTransform: "uppercase",
    width: "100%",
    height: "100%"
  },
  text: {
    paddingBottom: "30px",
    textAlign: "center"
  },
  question: {
    textAlign: "center",
    padding: "25px 0 0 0"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  const props = {
    center: {
      lat: -19.8157,
      lng: -43.9542
    },
    zoom: 11
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ height: "calc(100% - 50px)", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyBJpQLePmjZn_FV7FBbVUbBuyPdWqLEFRA" }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        />
        <RequestPanel />
        <AddressBar />
      </div>
      <footer className={classes.footer}>
        <Link to="/result">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Solicitar Carona
          </Button>
        </Link>
      </footer>
    </div>
  );
}
