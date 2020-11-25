import {
	ADD_LEADS,
	GET_LEADS,
	DELETE_LEADS,
	CREATE_LEAD,
	GET_ERRORS,
} from "./actionTypes"
import axios from "axios"

export const getLeads = () => (dispatch) => {
	axios
		.get("/api/leads/")
		.then((res) => {
			dispatch({
				type: GET_LEADS,
				payload: res.data,
			})
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {
					msg: err.response.data,
					status: err.response.status,
				},
			}),
		)
}

export const addLead = (data) => (dispatch) => {
	axios
		.post("/api/leads/", data)
		.then((res) => {
			dispatch({
				type: CREATE_LEAD,
				payload: { leadAdded: "Leads created" },
			})
			dispatch({
				type: ADD_LEADS,
				payload: res.data,
			})
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: {
					msg: err.response.data,
					status: err.response.status,
				},
			}),
		)
}

export const deleteLead = (id) => (dispatch) => {
	axios
		.delete(`/api/leads/${id}`)
		.then((res) => {
			dispatch({
				type: CREATE_LEAD,
				payload: { leadDeleted: "Leads Deleted" },
			})
			dispatch({
				type: DELETE_LEADS,
				payload: id,
			})
		})
		.catch((err) => console.log(err))
}
