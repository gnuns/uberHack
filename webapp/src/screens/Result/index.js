import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ReactSwipe from 'react-swipe';


import UserCard from './UserCard'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: '#f7f7f7' || '#ffffff'
  },
  main: {
    marginTop: '50px',
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
  let reactSwipeEl;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false,   widthOfSiblingSlidePreview: 50 }}
        ref={el => (reactSwipeEl = el)}
      > 
        <div style={{padding: '10px 5px', height: 'auto'}}><UserCard></UserCard></div>
        <div style={{padding: '10px 5px', height: 'auto'}}><UserCard></UserCard></div>
        <div style={{padding: '10px 5px', height: 'auto', display: 'block', float: 'right'}}><UserCard></UserCard></div>
      </ReactSwipe>
    </div>
      </Container>
      <footer className={classes.footer}>
      <Button variant="contained" color="primary" className={classes.button}>
          Combinar Carona
        </Button>
      </footer>
    </div>
  );
}
