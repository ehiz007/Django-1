import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	REGISTERATION_FAILED,
	REGISTERATION_SUCCESFUL,
} from "../actions/actionTypes"

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
		case LOGIN_SUCCESS:
		case REGISTERATION_SUCCESFUL:
			localStorage.setItem("token", action.payload.token)
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isLoading: false,
			}
		case AUTH_ERROR:
		case LOGIN_FAILED:
		case LOGOUT_SUCCESS:
		case REGISTERATION_FAILED:
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
