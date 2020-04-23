import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Recommendation from "../landing/recommendation/Recommendation";
import FindOnMap from "../landing/findonmap/FindOnMap";
import ViewItemGallery from "./viewItemGallery/ViewItemGallery";

const useStyles = makeStyles((theme) => ({
  itemGallery: {
    height: "70vh",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
    },
  },
  itemDetails: {
    height: "70vh",
    backgroundColor: "orange",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
  },
  itemAction: {
    height: "70vh",
    backgroundColor: "pink",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "20vh",
    },
  },
  reviews: {
    height: "50vh",
    backgroundColor: "green",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "20vh",
    },
  },
  recommendation: {
    height: "50vh",
    position: "relative",
  },
}));

const ViewItem = (props) => {
  const classes = useStyles();
  const { location } = props;
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={5} className={classes.itemGallery}>
          <ViewItemGallery />
        </Grid>
        <Grid item xs={12} sm={5} className={classes.itemDetails} />
        <Grid item xs={12} sm={2} className={classes.itemAction} />
        <Grid item xs={12} className={classes.reviews} />
      </Grid>
      <Grid item xs={12} className={classes.recommendation}>
        <Recommendation />
      </Grid>
      <FindOnMap />
    </div>
  );
};

export default ViewItem;
