import { GET_ERRORS, CREATE_LEAD } from "./actionTypes"

// CREATE MESSAGE
export const createMessage = (msg) => {
	return {
		type: CREATE_LEAD,
		payload: msg,
	}
}

// RETURN ERRORS
export const returnErrors = (msg, status) => {
	return {
		type: GET_ERRORS,
		payload: { msg, status },
	}
}
