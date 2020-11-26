import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "../actions/actionTypes"

const defaultState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	isLoading: false,
	user: null,
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			}
		case AUTH_ERROR:
			localStorage.removeItem("token")
			return {
				...state,
				token: null,
				isAuthenticated: null,
				isLoading: false,
				user: null,
			}
		default:
			return state
	}
}
