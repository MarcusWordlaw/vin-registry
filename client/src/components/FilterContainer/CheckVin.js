import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import ModalVinCheck from '../ModalVinCheck';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import CustomizedSelects from './CustomizedSelects'

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
  buttons: {
    padding: theme.spacing(2.5),
    width: '90%',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 1),
  },
  textWhite: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: '#FFFFFF',
  },
  tex: {
    root: {
      color: '#FFFFFF',
    },
  },
}));

const CheckVin = () => {
  const classes = useStyles();
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
      <ModalVinCheck />
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={0} gridShadow={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          <Button className={classes.buttons} variant="contained" color="secondary">
            <Typography>Export</Typography>
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            type="button"
            onClick={handleOpen}
          >
            <Typography className={classes.textWhite}>CHECK VIN</Typography>
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
      </Grid>
    </div>
  );
};

CheckVin.propTypes = {
  accounts: PropTypes.array.isRequired,
  contract: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log('in Map state to props', state.webReducer);
  return {
    accounts: state.webReducer.accounts,
    contract: state.webReducer.contract,
  };
};
export default connect(mapStateToProps)(CheckVin);
