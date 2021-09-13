const initialState = JSON.parse(localStorage.getItem('countData')) || 0;

const saveReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE':
            localStorage.setItem('countData',JSON.stringify(action.payload));
        default:
            return state;
    }
}

export default saveReducer;