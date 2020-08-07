import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { VinCard } from '../VinCard'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export const VinContainer = () => {
  const classes = useStyles();
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
          <VinCard/>
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
};
