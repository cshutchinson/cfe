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
    const url = process.env.HOST_URL === undefined ? 'http://localhost:8070':process.env.HOST_URL;

    return function (dispatch) {
        dispatch(requestCube(request));
        return axios.post(`${url}/rotate`, (request))
            .then((response) => {
                dispatch(receiveCube(response.data));
            })

    }
}