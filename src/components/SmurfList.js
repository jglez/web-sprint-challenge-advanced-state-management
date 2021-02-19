import React from 'react';
import Smurf from './Smurf';
import axios from 'axios'
import { connect } from 'react-redux'

const SmurfList = (props) => {
  const isLoading = false;

  console.log('SmurfList props: ', props)

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="listContainer">
      {props.smurfs.map(smurfObj => {
        return <Smurf smurf={smurfObj} key={smurfObj.id} />
      })}
    </div>);
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.

export default connect((state) => {
  return {
    smurfs: state.smurfs
  }
})(SmurfList)
