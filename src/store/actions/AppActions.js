export const INIT = 'INIT';
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE';
export const UPDATE_LOADER = 'UPDATE_LOADER';
export const SHOW_TOAST = 'SHOW_TOAST';
export const CHECK_MARK = 'CHECK_MARK';

export const showToast = (title) => {
    return {
        type: SHOW_TOAST,
        toast: {
            show: true,
            title,
        }
    };
}

export const updateAppStates = (payload) => ({ type: UPDATE_APP_STATE, payload });
export const enableLoader = () => ({ type: UPDATE_LOADER, loader: true });
export const disableLoader = () => ({ type: UPDATE_LOADER, loader: false });
export const checkMark = () => ({ type: CHECK_MARK, checkMark: false });