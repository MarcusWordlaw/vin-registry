import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import CustomizedSelects from './CustomizedSelects'

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
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  logo: {
    padding: theme.spacing(0),
    textAlign: 'left',
    marginLeft: theme.spacing(3),
  },
}));

export const Filters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} gridShadow={3}>
        <Grid item xs={8}>
          {/* <Typography className={classes.logo} variant="h5">
          <FilterListIcon /> FILTERS
          </Typography> */}
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.buttons} variant="contained" color="secondary">
            <Typography>CHECK VIN</Typography>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button className={classes.buttons} variant="contained" color="secondary">
            <Typography>Export</Typography>
          </Button>
        </Grid>
        <div bottom-border></div>
      </Grid>
    </div>
  );
};
