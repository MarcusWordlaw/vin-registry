import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
// import { colors } from '../../styles';

// const Container = styled.div`
//   /* background-color: #242526; */
//   height: 50px;
//   display: block;
//   flex-shrink: 0;
//   font-size: 14px;
//   padding: 0;
//   text-align: left;
//   border-bottom: 1px solid #222;
// `;

export const VinCard = () => {
  return (
    <>
        <TableRow key={1234}>
          <TableCell>{'4S3BMHB68B3286050'}</TableCell>
          <TableCell>{'CRITICAL'}</TableCell>
          <TableCell>{'8 Days'}</TableCell>
          <TableCell>{'312...'}</TableCell>
          <TableCell>{'Mar...'}</TableCell>
          <TableCell>{'1972'}</TableCell>
          <TableCell>{'Datsun'}</TableCell>
          <TableCell align="right">{'Button'}</TableCell>
        </TableRow>
    </>
  );
};
