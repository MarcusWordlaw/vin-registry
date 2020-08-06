import React from 'react';
import styled from 'styled-components';
import { VinCard } from '../VinCard';
// import { colors } from '../../styles';

const Container = styled.div`
  /* background-color: #242526; */
  height: 50px;
  display: block;
  flex-shrink: 0;
  font-size: 14px;
  padding: 0;
  text-align: left;
  border-bottom: 1px solid #222;
`;

export const VinContainer = () => {
  return (
    <>
      <Container>
        Vehicle Vin Card Container
        <VinCard />
      </Container>
    </>
  );
};
