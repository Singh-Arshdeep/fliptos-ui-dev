import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recommendation from './recommendation/Recommendation';
import NavBar from './navigation/NavBar';
import SearchBar from './search/SearchBar'

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
                    <NavBar/>
                </Grid>
                <Grid item xs={12} className={classes.searchBar}>
                    <SearchBar/>
                </Grid>
                <Grid item xs={12} className={classes.recommendation}>
                    <Recommendation/>
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