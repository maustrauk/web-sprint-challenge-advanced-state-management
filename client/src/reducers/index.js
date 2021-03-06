import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAIL, SET_ERROR } from './../actions';

export const initialState = {
    smurfs: [],
    err: "",
    isFetching: false
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCHING_QUOTE_START):
        return ({
            ...state,
            isFetching: true,
            err: ""
        });

        case(FETCHING_QUOTE_SUCCESS):
        return({
            ...state,
            smurfs: action.payload,
            isFetching: false
        });

        case(FETCHING_QUOTE_FAIL):
        return({
            ...state,
            err: action.payload,
            isFetching: false
        })

        case(SET_ERROR):
        return({
            ...state,
            err: action.payload
        })
        
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as parameters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary