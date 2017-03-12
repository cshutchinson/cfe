import axios from 'axios';

export const REQUEST_CUBE = 'REQUEST_CUBE';

function requestCube(request) {
    return {
        type: REQUEST_CUBE,
        request
    }
}


export const RECEIVE_CUBE = 'RECEIVE_CUBE';

function receiveCube(json) {
    return {
        type: RECEIVE_CUBE,
        cube: json
    }
}

export function fetchCube(request) {
    return function (dispatch) {
        dispatch(requestCube(request));
        return axios.post('http://localhost:8070/rotate', (request))
            .then((response) => {
                dispatch(receiveCube(response.data));
            })

    }
}