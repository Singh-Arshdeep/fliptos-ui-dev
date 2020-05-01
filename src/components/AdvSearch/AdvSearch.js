import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Recommendation from '../landing/recommendation/Recommendation';
import BookInfo from './bookCards/bookInfo';
import Filter from "./filter/filter";

const useStyles = makeStyles(() => ({
  recommendation: {
    height: '50vh',
  },
  filter: {
    height: 'auto',
    backgroundColor: 'snowwhite',
    borderRight: '1px solid grey',
    margin: '20px auto',
    padding: '10px'
    
  },
  searchRes: {
    height: 'auto',
    backgroundColor: 'snowwhite',
  },
}));

export default function AdvanceSearch() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.recommendation}>
          <Recommendation />
        </Grid>
        <Grid item xs={4} className={classes.filter}>
            <Filter />
        </Grid>
        <Grid item xs={8} className={classes.searchRes}>
          <BookInfo />
        </Grid>
      </Grid>
    </div>
  );
}
