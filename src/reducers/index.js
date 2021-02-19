import { FETCH_SMURFS_LOADING, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURF } from '../actions/index'

export const initialState = {
  smurfs: [
    {
      id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
      name: 'Poppa Smurf',
      position: 'Village Leader',
      nickname: 'Pops',
      description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }
  ],
  isLoading: false,
  error: ''
}

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {

    case (FETCH_SMURFS_LOADING):
      return ({
        ...state,
        isLoading: true
      })

    case (FETCH_SMURFS_SUCCESS):
      return ({
        ...state,
        isLoading: false,
        smurfs: action.payload
      })

    case (FETCH_SMURFS_FAIL):
      return ({
        ...state,
        error: action.payload,
        isLoading: false
      })

    case (ADD_SMURF):
      return ({
        ...state,
        smurfs: action.payload
      })

    default:
      return state
  }
}

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs ------------------------------------------------------ DONE
//  - a boolean indicating if the app is loading ------------------------------ DONE
//  - a string indicating a possible error message ---------------------------- DONE

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.

export default smurfReducer