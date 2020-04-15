import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../Landing/navigation/NavBar';
import Recommendation from '../Landing/recommendation/Recommendation';

const useStyles = makeStyles((theme) => ({
    nav: {
        height: '10vh',
        backgroundColor: 'yellow',
        [theme.breakpoints.down('xs')]: {
            height: '6vh',
        }
    },
    searchBar: {
        height: '10vh',
        backgroundColor: 'red', 
        [theme.breakpoints.down('xs')]: {
            height: '6vh',
        }
    },
    recommendation: {
        height: '50vh',
    },
    filter: {
        height: '80vh',
        backgroundColor: 'pink'
    },
    searchRes: {
        height: '80vh',
        backgroundColor: 'green'
    },
    footer: {
        height: '10vh',
        backgroundColor: 'black'
    },
}));

export default function AdvanceSearch() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.nav}>
                    <NavBar/>
                </Grid>
                <Grid item xs={12} className={classes.recommendation}>
                    <Recommendation/>
                </Grid>
                <Grid item xs={4} className={classes.filter}>

                </Grid>
                <Grid item xs={8} className={classes.searchRes}>

                </Grid>
                <Grid item xs={12} className={classes.footer}>
                </Grid>
            </Grid>
        </div>
    );
}