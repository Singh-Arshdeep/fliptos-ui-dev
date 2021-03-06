import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Landing from "./components/landing/Landing";
import AdvSearch from "./components/advSearch/AdvSearch";
import NavBar from "./components/landing/navigation/NavBar";
import SearchBar from "./components/landing/search/SearchBar";
import ViewItem from "./components/viewItem/ViewItem";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  nav: {
    height: "10vh",
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      height: "9.5vh",
    },
  },
  searchBar: {
    height: "10vh",
    backgroundColor: "red",
    [theme.breakpoints.down("xs")]: {
      height: "9vh",
    },
  },
  footer: {
    height: "10vh",
    backgroundColor: "#3f51b5",
    color: "white",
    width: "100%",
  },
  footerContent: {
    marginLeft: "80%",
    marginTop: "3vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <HashRouter>
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
        <Route exact path="/viewitem" component={ViewItem} />
        <Redirect to="/" />
      </Switch>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.footer}>
          <div className={classes.footerContent}>
            All rights reserved &copy; 2020
          </div>
        </Grid>
      </Grid>
    </HashRouter>
  );
}

export default App;
