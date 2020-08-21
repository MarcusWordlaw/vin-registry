// import React, { useState } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { Inventory } from './Inventory';
import { Filters } from './FilterContainer/Filters';
import { VinContainer } from './VinContainer';
import getWeb3 from '../getWeb3';
import ContentTracking from '../contracts/ContentTracking.json';
import { connect } from 'react-redux';
import { setWeb3State, setContractState, setAccountsState } from '../store/action';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  padding: 5px 450px 20px;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  height: calc(100vh - 50px);
  overflow: visible;
`;

class App extends Component {
  componentDidMount() {
    this.loadWeb3();
    this.addVehicle();
  }

  // Instantiates Web3 library and smart contracts
  loadWeb3 = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      // const networkId = await web3.eth.net.getId();
      // const deployedNetwork = ContentTracking.networks[networkId];
      // const instance = new web3.eth.Contract(
      //   ContentTracking.abi,
      //   deployedNetwork && deployedNetwork.address
      // );

      // console.log('In Load Web 3, what is contract instance', instance.methods);
      // Set web3, accounts, and contract to the state.
      this.props.setWeb3({ web3 });
      this.props.setAccount({ accounts });
      // this.props.setContractInstance({ instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.error(error);
    }
  };

  addVehicle = async () => {
    // const { accounts, contract } = this.props;
    // const { document } = this.state;

    // //Invoking set method in content tracking contract to post document to blockchain
    // await contract.methods.storeDocument(document).send({ from: accounts[0] });

    // //Method to set hashed document as a state variable
    // const hashResponse = await contract.methods.returnHashedDocument(document).call();

    let tryVib = this;
    console.log('in add vehicle method');
    console.log('what is this', tryVib);
  };

  generateDailyReport = async () => {};

  exportReport = async () => {};

  render() {
    return (
      <Container>
        <Header />
        <Inventory />
        <Filters />
        <VinContainer />
      </Container>
    );
  }
}

App.propTypes = {
  setWeb3: PropTypes.func.isRequired,
  setAccount: PropTypes.func.isRequired,
  // setContractInstance: PropTypes.func.isRequired,
};

//May not need state
const mapStateToProps = (state) => ({
  web310: state.web3,
  accounts310: state.accounts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setWeb3: (payload) => {
      dispatch(setWeb3State(payload));
    },
    setAccount: (payload) => {
      dispatch(setAccountsState(payload));
    },
    // setContractInstance: (payload) => {
    //   dispatch(setContractState(payload));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
