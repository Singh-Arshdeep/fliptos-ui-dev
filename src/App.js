import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Landing from './components/landing/Landing';
import AdvSearch from './components/AdvSearch/AdvSearch';
import NavBar from './components/landing/navigation/NavBar';
import SearchBar from './components/landing/search/SearchBar'
import './App.css';

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
  footer: {
      height: '10vh',
      backgroundColor: 'black'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <HashRouter >
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.nav}>
          <NavBar />
        </Grid>
        <Grid item xs={12} className={classes.searchBar}>
          <SearchBar />
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/advsearch" component={AdvSearch} />
        <Redirect to='/' />
      </Switch>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.footer}>
        </Grid>
      </Grid>
    </HashRouter >
  );
}

export default App;
