
const defaultState = {
    leads: []
}

export default (state = defaultState, action) => {
    switch(action.type){
        case 'Add lead':
            return {
                leads: [...state.leads,action.payload]
            }
        case 'Delete lead':
            return {
                leads: state.leads.filter((lead) => lead.id !== action.payload)
            }
        case 'Get leads':
            return {
                ...state,   
                leads: action.payload
            }
        default:
            return state
    }
}