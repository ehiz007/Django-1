import {ADD_LEADS, GET_LEADS, DELETE_LEADS} from './actionTypes'
import axios from "axios";

export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const addLead = (data) => dispatch => {
    axios.post('/api/leads/', data)
        .then(res => {
             dispatch({
                type: ADD_LEADS,
                payload: res.data
            })
        }).catch(err=> console.log(err))
}

export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_LEADS,
                payload: id
            })
        }).catch(err => console.log(err))
}
