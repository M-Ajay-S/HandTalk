const reducer = (state, action) => {
    if (action.type === "GET_LETTERS") {
        return {
            ...state,
            letters: action.payload
        }
    }
    return state
}

export default reducer