const initialState = {
    image: ''
}

const uploadImageReducer = (state = initialState, action) => {
    if (action.type === 'SET_IMAGE') {
        return {
            ...state,
            image: action.payload
        }
    }
    return state;
}

export default uploadImageReducer;