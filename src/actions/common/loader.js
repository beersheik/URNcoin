import * as actionTypes from '../actionTypes';

export const showLoader = () => {
    const data = { show: true };
    return {
        type: actionTypes.SHOW_LOADER,
        ...data
    }
}

export const hideLoader = () => {
    const data = { show: false };
    return {
        type: actionTypes.HIDE_LOADER,
        ...data
    }
}
