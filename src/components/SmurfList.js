import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'

const SmurfList = (props) => {

  if (props.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (props.error) {
    return <h1>Error: {props.error}</h1>
  }

  return (
    <div className="listContainer">
      {props.smurfs.map(smurfObj => {
        return <Smurf smurf={smurfObj} />
      })}
    </div>);
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component. -------------------------------DONE
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list. ------------ DONE
//3. Replace the static isLoading variable with the state loading variable. ---------- DONE

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(SmurfList)
