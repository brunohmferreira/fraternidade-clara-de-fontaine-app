import store from '../store';

export const request = () => {

    return {
        env: store.getState().env
    };
}
