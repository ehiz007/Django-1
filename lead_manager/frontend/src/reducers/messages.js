import {
	CREATE_LEAD,
	LOGIN,
	LOGOUT,
	REGISTERATION_SUCCESSFUL,
} from "../actions/actionTypes"
const defaultState = {}

export default (state = defaultState, actions) => {
	switch (actions.type) {
		case CREATE_LEAD:
			return actions.payload
		case LOGIN:
		case LOGOUT:
		case REGISTERATION_SUCCESSFUL:
			return { auth: actions.payload }
		default:
			return state
	}
}
