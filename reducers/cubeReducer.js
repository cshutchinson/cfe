import { combineReducers } from 'redux';
import { REQUEST_CUBE, RECEIVE_CUBE } from '../actions/actions.js'

const initialState = {
    cube: {
        top: "000000000",
        left: "111111111",
        right: "222222222",
        front: "333333333",
        bottom: "444444444",
        back: "555555555"
    },
    isFetching: true
};

export default function cube (state=initialState, action) {
    switch (action.type) {
        case REQUEST_CUBE:
            return Object.assign({}, action.request.cube);
        case RECEIVE_CUBE:
            console.log('action on receive cube: ' , action);
            return Object.assign({}, state, {
                cube: action.cube
            });
        default:
            return state;
    }
}

