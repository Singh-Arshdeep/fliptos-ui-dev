import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sampleBookImg from './images/sampleBook.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: '100%',
    margin: 'auto',
    padding: '1%',
    height: '40vh',
    marginTop: '5vh',
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={sampleBookImg}
          title="Contemplative Reptile"
        /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.bookDetails.author}
            </Typography>
            <h4>Title: {props.bookDetails.title}</h4>
            <h4>Publisher: {props.bookDetails.publisher}</h4>
            <h4>Pages: {props.bookDetails.pages}</h4>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}
