import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: '95%',
    float: 'none',
    margin: 'auto'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Ana Letícia Camargos
          </Typography>
          <Typography variant="curso" color="textSecondary" component="p">
          Direito, UFMG
          </Typography>
          <Typography variant="about" color="textSecondary" component="p">
            No meu carro não pode faltar
          </Typography>
          <Typography variant="musica" color="textSecondary" component="p">
            No meu carro eu escuto
          </Typography>
          <Typography variant="assunto" color="textSecondary" component="p">
            Conversamos sobre
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}