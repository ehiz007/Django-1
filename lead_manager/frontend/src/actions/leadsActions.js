import { ADD_LEADS, GET_LEADS, DELETE_LEADS, CREATE_LEAD } from "./actionTypes"
import axios from "axios"
import { returnErrors, createMessage } from "./messages"
import { tokenConfig } from "./auth"

export const getLeads = () => (dispatch, getState) => {
	axios
		.get("/api/leads/", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: GET_LEADS,
				payload: res.data,
			})
		})
		.catch((err) => {
			return dispatch(returnErrors(err.response.data, err.response.status))
		})
}

export const addLead = (data) => (dispatch, getState) => {
	axios
		.post("/api/leads/", data, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ leadAdded: "Leads created" }))

			dispatch({
				type: ADD_LEADS,
				payload: res.data,
			})
		})
		.catch((err) => {
			return dispatch(returnErrors(err.response.data, err.response.status))
		})
}

export const deleteLead = (id) => (dispatch, getState) => {
	axios
		.delete(`/api/leads/${id}`, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ leadDeleted: "Leads Deleted" }))
			dispatch({
				type: DELETE_LEADS,
				payload: id,
			})
		})
		.catch((err) => console.log(err))
}
