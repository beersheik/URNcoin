import * as actionTypes from '../../actions/actionTypes';

let initialState = {
    show: false
};
const showHideToaster = (state, action) => {
    return updateObject(state, action);
};


const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADER: return showHideToaster(initialState, action);
        case actionTypes.HIDE_LOADER: return showHideToaster(initialState, action);
        default: return state;
    }
};
