import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import ModalForm from './ModalForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function getModalStyle() {
  const top = 35;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
  centerTextBlue: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#00b0ff',
  },
  centerTextYellow: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#fbc02d',
  },
  centerTextRed: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#bf360c',
  },
  textWhite: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#FFFFFF',
  },
  logo: {
    padding: theme.spacing(0),
    textAlign: 'left',
    marginLeft: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Inventory = (props) => {
  const classes = useStyles();
  const { vehicleArray } = props;
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ModalForm />
    </div>
  );

  // Probably a better way to do this, revisit 
  const getIssues = () => {
    let statusNumber = 0
    vehicleArray.map( (x) => {
      if(x.vehicleStatus === "issues")
      statusNumber++
      return statusNumber;
    })
    return statusNumber
  }

  const getHigh = () => {
    let statusNumber = 0
    vehicleArray.map( (x) => {
      if(x.vehicleStatus === "high")
      statusNumber++
      return statusNumber;
    })
    return statusNumber
  }

  const getCritical = () => {
    let statusNumber = 0
    vehicleArray.map( (x) => {
      if(x.vehicleStatus === "critical")
      statusNumber++
      return statusNumber;
    })
    return statusNumber
  }

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
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            type="button"
            onClick={handleOpen}
          >
            <Typography className={classes.textWhite}>Add Vehicles</Typography>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </Grid>
        <div bottom-border></div>
        <Grid item xs={2}>
          <Typography className={classes.centerText} variant="h3">
            {vehicleArray.length}
          </Typography>
          <Typography className={classes.vehicles}>Total Vehicles</Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerTextBlue} variant="h3">
            {getIssues()}
          </Typography>
          <Typography className={classes.vehicles}>Issues</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerTextYellow} variant="h3">
            {getCritical()}
          </Typography>
          <Typography className={classes.vehicles}>High</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerTextRed} variant="h3">
          {getHigh()}
          </Typography>
          <Typography className={classes.vehicles}>Critical</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerTextRed} variant="h3">
            0
          </Typography>
          <Typography className={classes.vehicles}>Disputes</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Inventory.propTypes = {
  vehicleArray: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    vehicleArray: state.vehicleReducer.vehicleArray,
  };
};

export default connect(mapStateToProps)(Inventory);
