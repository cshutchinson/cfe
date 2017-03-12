import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
}