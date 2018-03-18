import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from './login.js';

const commonReducer = function(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
};

const reducer = combineReducers({
    loginReducer
});

export default reducer;
