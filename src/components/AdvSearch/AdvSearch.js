import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recommendation from '../Landing/recommendation/Recommendation';
import BookInfo from './bookCards/bookInfo';


const useStyles = makeStyles((theme) => ({
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
}));

export default function AdvanceSearch() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.recommendation}>
                    <Recommendation/>
                </Grid>
                <Grid item xs={4} className={classes.filter}>
                </Grid>
                <Grid item xs={8} className={classes.searchRes}>
                  <BookInfo/>
                </Grid>
            </Grid>
        </div>
    );
}