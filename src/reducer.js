export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic fir adding item to basket
            return { state };
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            return { state };
        default:
            return state;
    }
}

export default reducer;