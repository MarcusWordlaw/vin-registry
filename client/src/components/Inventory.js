import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  inventory: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttons: {
    padding: theme.spacing(2.5),
    width: '90%',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  vehicles: {
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  centerText: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    padding: theme.spacing(0),
    textAlign: 'left',
    marginLeft: theme.spacing(3),
  },
}));

export const Inventory = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} gridShadow={3}>
        <Grid item xs={8}>
          <Typography className={classes.logo} variant="h2">
            Inventory
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.buttons} variant="contained" color="secondary">
            <Typography>Daily Reports</Typography>
          </Button>
          <div className={classes.inventory}></div>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.buttons} variant="contained" color="secondary">
            <Typography>Add Vehicles</Typography>
          </Button>
        </Grid>
        <div bottom-border></div>
        <Grid item xs={2}>
        <Typography className={classes.centerText} variant="h3">60</Typography>
          <Typography className={classes.vehicles}>Total Vehicles</Typography>
        </Grid>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.centerText} variant="h3">5</Typography>
          <Typography className={classes.vehicles}>Issues</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.centerText} variant="h3">3</Typography>
          <Typography className={classes.vehicles}>High</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.centerText} variant="h3">1</Typography>
          <Typography className={classes.vehicles}>Critical</Typography>
        </Grid>
        <Grid item xs={2}>
        <Typography className={classes.centerText} variant="h3">4</Typography>
          <Typography className={classes.vehicles}>Disputes</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
