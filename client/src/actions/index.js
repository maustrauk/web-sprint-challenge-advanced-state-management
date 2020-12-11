import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';
export const SET_ERROR = 'SET_ERROR';

export const getQuote = () => {
    return (dispatch => {

        dispatch({type:FETCHING_QUOTE_START});

        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err.message});
            });
    });
}

export const setError = (err) => {
    return {
        type: SET_ERROR,
        payload: err
    }
}

export const addSmurf = (smurf) => {
    return (dispatch => {

        if(smurf.name === "") {
            dispatch(setError("Smurf data does not includes a name"));
        } else if (smurf.nickname === "") {
            dispatch(setError("Smurf data does not includes a nickname"));
        } else if (smurf.position === "") {
            dispatch(setError("Smurf data does not includes a position"));
        } else {
            dispatch({type:FETCHING_QUOTE_START});

            axios
            .post('http://localhost:3333/smurfs',smurf)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err.message});
            });
        }

    })
}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.