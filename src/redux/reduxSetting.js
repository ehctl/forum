var initalState = {
    point : 1
}

var handleState = (state, action) => {
    switch(action.type) {
        case 'CHANGE_POINT':
            state = {
                point: action.payload
            };

            return state;
        default:
            return state;
    }
}

function reducer(state = initalState, action) {
    return handleState(state, action);
}

export { reducer }