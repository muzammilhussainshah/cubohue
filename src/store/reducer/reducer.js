import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    dummy: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.DUMMY:
            return ({
                ...state,
                dummy: action.payload
            })
        default:
            return state;
    }

}