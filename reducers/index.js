import {combineReducers} from 'redux';
import cube from './cubeReducer';

const rootReducer = combineReducers ({
    cube
});

export default rootReducer;