import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useForm from './useForm';

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
    value: 'critical',
    label: 'Critical',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'low',
    label: 'Low',
  },
];

const ModalForm = (props) => {
  const classes = useStyles();
  const { values, handleChange, handleSubmit } = useForm(formData);
  const { accounts, contract } = props;

  const createVehicle = async () => {
    debugger;
    console.log('In Create Vehicle');
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

const mapStateToProps = (state) => {
  return {
    accounts: state.root.accounts,
    contract: state.root.contract,
  };
};
export default connect(mapStateToProps)(ModalForm);
