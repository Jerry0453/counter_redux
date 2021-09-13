export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const saveToStorage = (nr) => {
    return {
        type: 'SAVE',
        payload: nr
    };
};