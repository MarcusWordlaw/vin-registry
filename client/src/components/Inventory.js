import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import ModalForm from './ModalForm';

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

export const Inventory = () => {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
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
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <ModalForm />
    </div>
  );

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
            color="secondary"
            type="button"
            onClick={handleOpen}
          >
            <Typography>Add Vehicles</Typography>
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
            60
          </Typography>
          <Typography className={classes.vehicles}>Total Vehicles</Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerText} variant="h3">
            5
          </Typography>
          <Typography className={classes.vehicles}>Issues</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerText} variant="h3">
            3
          </Typography>
          <Typography className={classes.vehicles}>High</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerText} variant="h3">
            1
          </Typography>
          <Typography className={classes.vehicles}>Critical</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.centerText} variant="h3">
            4
          </Typography>
          <Typography className={classes.vehicles}>Disputes</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
