import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import getWeb3 from '../getWeb3';
// import ContentTracking from '../contracts/ContentTracking.json';

class ModalForm extends Component {

  addVehicle = async () => {
    try {
      // Get network provider and web3 instance.
      // const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      // const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = ContentTracking.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   ContentTracking.abi,
      //   deployedNetwork && deployedNetwork.address
      // );

      // console.log('In Load Web 3, what is contract instance', instance.methods);
      // Set web3, accounts, and contract to the state.

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };


  handleSubmit(e) {
    //Invoke add vehicle function
    // Add rest of data to local storage?
    console.log('Handle submit', e);
  }

  render() {
    const {
      fields: { customerName, vinNUm, modelYr, brand, vehicleStatus },
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <label>Customer Name</label>
          <div>
            <Field
              name="customerName"
              component="input"
              type="text"
              placeholder="Customer Name"
              {...customerName}
            />
          </div>
        </div>
        <div>
          <label>VIN</label>
          <div>
            <Field name="vin" component="input" type="text" placeholder="Vin" {...vinNUm} />
          </div>
        </div>
        <div>
          <label>Model Year</label>
          <div>
            <Field
              name="modelYear"
              component="input"
              type="text"
              placeholder="Model Year"
              {...modelYr}
            />
          </div>
        </div>
        <div>
          <label>Brand</label>
          <div>
            <Field name="brand" component="input" type="text" placeholder="brand" {...brand} />
          </div>
        </div>
        <div>
          <label>Vehicle Status</label>
          <div>
            <Field name="vehicleStatus" component="select" {...vehicleStatus}>
              <option />
              <option value="Critical">Critical</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Field>
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

// Decorate the form component
export default reduxForm({
  form: 'modal', // a unique identifier for this form
  fields: ['customerName', 'vinNUm', 'modelYr', 'brand', 'vehicleStatus'],
})(ModalForm);
