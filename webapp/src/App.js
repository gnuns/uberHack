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
// https://material-ui.com/components/transitions/

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: 0,
    position: 'absolute',
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
          Começar
        </Button>
      </footer>
    </div>
  );
}
