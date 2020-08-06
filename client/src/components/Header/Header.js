import React from 'react';
import styled from 'styled-components';
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

const Align = styled.div`
  text-align: ${props => props.align};
  display: inline;
  ${props => props.padding && `padding-left: 15px;`}
`;

export const Header = () => {
  return (
    <>
      <Container>
      <Align align="left" padding>
      Vin Registry Header
      </Align>
      </Container>
    </>
  );
};
