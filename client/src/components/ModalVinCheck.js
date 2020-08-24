import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React from 'react';
import PropTypes from 'prop-types';
import useForm from './useForm';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  status: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const ModalVinCheck = (props) => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = useForm(formData);
  const { contract } = props;

  const checkVin = async (values) => {
    let response = '';
    response = await contract.methods.createVehicle(values.vin).call();
    if (response !== undefined) {
      if (response === true) {
        response = 'The vehicle exists in the registry';
        returnTruthy(response);
      } else {
        response = 'The Vehicle Does Not Exist';
        returnTruthy(response);
      }
    }
  };

  const returnTruthy = (response) => {
    alert(response);
  };
  function formData() {
    checkVin(values);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          CHECK VEHICLE VIN
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="vin"
            label="Vin Number"
            name="vin"
            value={values.vin}
            onInput={handleChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CHECK VIN
          </Button>
        </form>
      </div>
    </Container>
  );
};

ModalVinCheck.propTypes = {
  contract: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log('in Map state to props', state.webReducer);
  return {
    contract: state.webReducer.contract,
  };
};
export default connect(mapStateToProps)(ModalVinCheck);
