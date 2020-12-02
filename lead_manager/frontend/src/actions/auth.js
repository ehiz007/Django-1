import axios from "axios"
import { returnErrors } from "./messages"
import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	LOGIN,
	LOGOUT,
	REGISTERATION_SUCCESSFUL,
} from "./actionTypes"

//TOKEN GENERATOR
export const tokenConfig = (getState) => {
	const token = getState().auth.token

	const config = {
		headers: {
			"Content-type": "application/json",
		},
	}

	if (token) {
		config.headers["Authorization"] = `Token ${token}`
	}

	return config
}

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING })

	axios
		.get("/api/auth/user", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: AUTH_ERROR,
			})
		})
}

//LOGIN USERS
export const login = (username, password) => (dispatch) => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	}

	const body = JSON.stringify({ username, password })

	axios
		.post("/api/auth/login", body, config)
		.then((res) => {
			dispatch({ type: LOGIN, payload: "Login successful" })
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: LOGIN_FAILED,
			})
		})
}

//LOGOUT USER

export const logout = () => (dispatch, getState) => {
	axios
		.post("/api/auth/logout", null, tokenConfig(getState))
		.then((res) => {
			dispatch({ type: LOGOUT, payload: "Logged out" })
			dispatch({
				type: LOGOUT_SUCCESS,
			})
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status))
		})
}

//REGISTER USER

export const register = ({ username, email, password }) => (dispatch) => {
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	}

	const body = JSON.stringify({ username, email, password })

	axios
		.post("/api/auth/register", body, config)
		.then((res) => {
			dispatch({
				type: REGISTERATION_SUCCESSFUL,
				payload: "Registeration successful",
			})
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			})
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status))
			dispatch({
				type: LOGIN_FAILED,
			})
		})
}
