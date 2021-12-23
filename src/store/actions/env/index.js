export const UPDATE_ENV = 'UPDATE_ENV';
export const RESET_ENV = 'RESET_ENV';

export function updateEnv(data) {
    return {
        type: UPDATE_ENV,
        payload: data
    };
}

export function resetEnv() {
    return {
        type: RESET_ENV,
        payload: {}
    };
}