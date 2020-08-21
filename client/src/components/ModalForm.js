import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ModalForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer Name</label>
        <div>
          <Field
            name="customerName"
            component="input"
            type="text"
            placeholder="Customer Name"
          />
        </div>
      </div>
      <div>
        <label>VIN</label>
        <div>
          <Field
            name="vin"
            component="input"
            type="text"
            placeholder="Vin"
          />
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
          />
        </div>
      </div>
      <div>
        <label>Brand</label>
        <div>
          <Field
            name="brand"
            component="input"
            type="text"
            placeholder="brand"
          />
        </div>
      </div>
      <div>
        <label>Vehicle Status</label>
        <div>
          <Field name="vehicleStatus" component="select">
            <option />
            <option value="Critical">Critical</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Field>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'modal', // a unique identifier for this form
})(ModalForm);
