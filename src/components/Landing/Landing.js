import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    nav: {
        height: '10vh',
        backgroundColor: 'yellow'
    },
    searchBar: {
        height: '10vh',
        backgroundColor: 'red'
    },
    recommendation: {
        height: '50vh',
        backgroundColor: 'blue'
    },
    category: {
        height: '80vh',
        backgroundColor: 'orange'
    },
    map: {
        height: '40vh',
        backgroundColor: 'pink'
    },
    footer: {
        height: '10vh',
        backgroundColor: 'black'
    },
}));

export default function Landing() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.nav}>
                </Grid>
                <Grid item xs={12} className={classes.searchBar}>
                </Grid>
                <Grid item xs={12} className={classes.recommendation}>
                </Grid>
                <Grid item xs={12} className={classes.category}>
                </Grid>
                <Grid item xs={12} className={classes.map}>
                </Grid>
                <Grid item xs={12} className={classes.footer}>
                </Grid>
            </Grid>
        </div>
    );
}