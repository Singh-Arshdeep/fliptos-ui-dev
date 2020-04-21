import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: '50%',
      margin: 'auto',
      padding: '1%',
      height: '50vh',
      marginTop: '5vh',
    },
    media: {
        height: 140,
      },
  });

function BookCard(props) {
    const classes = useStyles();

    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/img/book1.jpg"
                    title="Book Cover"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Author: {props.book.author}
                    </Typography>
                    <h4>
                    Title:
                    {props.book.title}
                    </h4>
                    <h4>
                    Publisher:
                    {props.book.publisher}
                    </h4>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Contact Info
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default BookCard;
