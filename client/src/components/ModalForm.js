import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';

const ModalForm = (props) => {
  const { accounts, contract } = props;

  const createVehicle = async (e) => {
    e.preventDefault();
    console.log('In Create Vehicle');
    let _vin = e.target[0].value;
    await contract.methods.createVehicle(_vin).send({ from: accounts[0] });
  };

  const handleSubmit = (e) => {
    debugger
    createVehicle(e);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        VIN
        <input type="text" placeholder="Vin" />
        </label>
        <input type="submit" value="submit" />
    </form>
  );
};

ModalForm.propTypes = {
  accounts: PropTypes.array.isRequired,
  contract: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  // console.log("in map state", state )
  return {
    accounts: state.root.accounts,
    contract: state.root.contract,
  };
};

export default connect(mapStateToProps)(ModalForm);

// export default connect(mapStateToProps)(
//   reduxForm({
//     form: 'modalForm', // a unique identifier for this form
//     fields: ['customerName10101'],
//     // enableReinitialize: true,
//   })(ModalForm)
// );

// ModalForm = connect(
//   mapStateToProps
// )(ModalForm);

// export default reduxForm({
//   form: 'modalForm', // a unique identifier for this form
// })(ModalForm);
