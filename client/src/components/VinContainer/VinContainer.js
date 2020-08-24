import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Typography } from '@material-ui/core';

const VinContainer = (props) => {
  const { vehicleArray } = props;

  return (
    <React.Fragment>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>VIN</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>Customer No.</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Model Year</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicleArray.map((x) => {
            return (
              <TableRow key={x.vin}>
                <TableCell>{x.vin}</TableCell>
                <TableCell>{x.vehicleStatus}</TableCell>
                <TableCell>{5}</TableCell>
                <TableCell>{x.customerNumber}</TableCell>
                <TableCell>{x.customerName}</TableCell>
                <TableCell>{x.modelYear}</TableCell>
                <TableCell>{x.brand}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="secondary">
                    <Typography>CONTACT</Typography>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

VinContainer.propTypes = {
  vehicleArray: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    vehicleArray: state.vehicleReducer.vehicleArray,
  };
};

export default connect(mapStateToProps)(VinContainer);
