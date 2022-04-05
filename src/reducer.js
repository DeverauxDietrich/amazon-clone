export const initialState = {
    basket: [{

    }],
    user: null,
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                 ...state,
                 basket: [...state.basket, action.item],
                };
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                // if item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in the basket)`
                );
            }
            
            
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;