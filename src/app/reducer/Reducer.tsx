export const initialState = {
    cartdata: [],
};

//Reducer to Handle Actions
export const ProductReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'addProduct':
            return {
                ...state,
                cartdata: action.payload
            };

        case 'deleteProduct':
            return {
                ...state,
                cartdata: action.payload
            };
        default:
            return state;
    }

};