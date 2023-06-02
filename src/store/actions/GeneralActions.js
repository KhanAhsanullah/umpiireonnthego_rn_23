export const UPDATE_STATE = 'GENERAL_UPDATE';
// export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';
export const UPDATE_LOADER = 'UPDATE_LOADER';

export const updateGeneral = (key, value) => {
    return {
        type: UPDATE_STATE,
        key,
        value
    };
}

// export const updateAppState = (key, payload) => {
//     return {
//         type: UPDATE_APP_STATE,
//         ...payload
//     };
// }

export const enableLoader = () => ({ type: UPDATE_LOADER, mask: true });
export const disableLoader = () => ({ type: UPDATE_LOADER, mask: false });
export const showToast = (title, message = "") => ({ type: UPDATE_APP_STATE, payload: { toast: { show: true, title, message } } });
export const hideToast = () => ({ type: UPDATE_APP_STATE, payload: { toast: { show: false, title: "", message: "" } } });
