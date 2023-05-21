const reducer = (state, action) => {
    if (action.type === "GET_LETTERS") {
        return {
            ...state,
            letters: action.payload
        }
    }
    if (action.type === 'GET_LETTERCLASS') {
        return {
            ...state,
            letterClass: action.payload
        }
    }
    return state
}

export default reducer