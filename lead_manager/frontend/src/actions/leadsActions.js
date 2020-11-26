import { ADD_LEADS, GET_LEADS, DELETE_LEADS, CREATE_LEAD } from "./actionTypes"
import axios from "axios"
import { returnErrors, createMessage } from "./messages"

export const getLeads = () => (dispatch) => {
	axios
		.get("/api/leads/")
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

export const addLead = (data) => (dispatch) => {
	axios
		.post("/api/leads/", data)
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

export const deleteLead = (id) => (dispatch) => {
	axios
		.delete(`/api/leads/${id}`)
		.then((res) => {
			dispatch(createMessage({ leadDeleted: "Leads Deleted" }))
			dispatch({
				type: DELETE_LEADS,
				payload: id,
			})
		})
		.catch((err) => console.log(err))
}
