import store from '../store';

export const request = () => {

    var xxx = {
        env: store.getState().env
    };
    return xxx;
};
