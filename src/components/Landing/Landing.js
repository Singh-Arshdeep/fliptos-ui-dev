import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recommendation from './recommendation/Recommendation';
import FindOnMap from './findonmap/FindOnMap';

const useStyles = makeStyles((theme) => ({
    recommendation: {
        height: '50vh',
        position: 'relative'
    },
    category: {
        height: '80vh',
        backgroundColor: 'orange',
        position: 'relative'
    },
    map: {
        height: '40vh',
        backgroundColor: 'pink',
        position: 'relative'
    },
}));

export default function Landing() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} className={classes.recommendation}>
                    <Recommendation/>
                </Grid>
                <Grid item xs={12} className={classes.category}>
                </Grid>
                <Grid item xs={12} className={classes.map}>
                    <FindOnMap/>
                </Grid>
            </Grid>
        </div>
    );
}