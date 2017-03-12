import axios from 'axios';

export const REQUEST_CUBE = 'REQUEST_CUBE';

axios.create({
    baseURL: 'http://localhost:8070',
});

function requestCube(request) {
    return {
        type: REQUEST_CUBE,
        request
    }
}


export const RECEIVE_CUBE = 'RECEIVE_CUBE';

function receiveCube(json) {
    console.log('json: ', json.data);
    return {
        type: RECEIVE_CUBE,
        cube: json.data
    }
}

export function fetchCube(request) {
    return function (dispatch) {
        dispatch(requestCube(request));
        console.log('request: ', request);
        return axios.post('http://localhost:8070/rotate', (request))
            .then((response) => {
                console.log('response: ', response.data);
                dispatch(receiveCube(response));
            })

    }
}