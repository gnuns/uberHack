import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

import CheckboxList from './CheckboxList'

// Usar para transições de tela:
// https://voronianski.github.io/react-swipe/demo/?continuous=true
// https://material-ui.com/components/transitions/

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    position: 'relative',
    backgroundColor: '#f7f7f7' || '#ffffff',
    paddingBottom: '56px',
    overflowX: 'hidden'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: 0,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '56px'
  },
  button: {
    margin: 0,
    borderRadius: 0,
    width: '100%',
    height: '100%',
  },
  text: {
    paddingBottom: '30px',
    textAlign: 'center'
  },
  question: {
    textAlign: 'center',
    padding: '25px 0 0 0'
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography color="textSecondary" className={classes.text} variant="body2">
        Antes de encontrar a sua carona, precisamos conhecer você:
        </Typography>
        
        <Divider variant="fullWidth" />
        <Typography color="textSecondary" className={classes.question} variant="body1">
        1. Que tipo de múscia você gosta?
        </Typography>
        
        <CheckboxList />
      </Container>
      <footer className={classes.footer}>
      <Button variant="contained" color="primary" className={classes.button}>
          Continuar
        </Button>
      </footer>
    </div>
  );
}
