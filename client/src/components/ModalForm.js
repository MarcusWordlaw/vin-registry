import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import PropTypes from 'prop-types';
import useForm from './useForm';
import { setVehicleArrayState } from '../store/action';
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

const status = [
  {
    value: 'issues',
    label: 'Issues',
  },
  {
    value: 'high',
    label: 'High',
  },
  {
    value: 'critical',
    label: 'Critical',
  },
];

const ModalForm = (props) => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = useForm(formData);
  const { accounts, contract, setVehicleArray } = props;
  // const valuesArr = []

  const createVehicle = async () => {
    // valuesArr.push(values)
    // console.log('In Create Vehicle, show values array', valuesArr);
    setVehicleArray({ values});
    let _vin = values.vin;
    await contract.methods.createVehicle(_vin).send({ from: accounts[0] });
  };
  function formData() {
    console.log('In login', values);
    createVehicle(values);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ADD A NEW VEHICLE
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
          <TextField
            id="vehicleStatus"
            name="vehicleStatus"
            select
            fullWidth
            label="Select Vehicle Status"
            required
            value={values.vehicleStatus}
            onChange={handleChange}
            variant="filled"
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="customerNumber"
            label="Customer Number"
            name="customerNumber"
            value={values.customerNumber}
            onInput={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="customerName"
            label="Customer Name"
            name="customerName"
            value={values.customerName}
            onInput={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="modelYear"
            label="Model Year"
            name="modelYear"
            value={values.modelYear}
            onInput={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="brand"
            label="Brand"
            name="brand"
            value={values.brand}
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
            SUBMIT
          </Button>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
    // <form onSubmit={handleSubmit}>
    //     <label>
    //     VIN
    //     <input className="input" type="vin" name="vin" placeholder="Vin" onChange={handleChange} value={values.vin} required />
    //     </label>
    //     <button type="submit" value="submit">Submit</button>
    // </form>
  );
};

ModalForm.propTypes = {
  accounts: PropTypes.array.isRequired,
  contract: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVehicleArray: (payload) => {
      dispatch(setVehicleArrayState(payload));
    }
  };
};

const mapStateToProps = (state) => {
  console.log("in Map state to props", state.webReducer)
  return {
    accounts: state.webReducer.accounts,
    contract: state.webReducer.contract,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
