import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginBottom: '10px',
      marginTop:'10px',
      maxWidth: '80%',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

function BookCard(props) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
            <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="/img/book1.jpg"/>
            </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                    Author: {props.book.author}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Title: {props.book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Publisher: {props.book.publisher}
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Contact Info
                </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
        </div>
    );
}

export default BookCard;




