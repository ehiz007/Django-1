import { combineReducers } from "redux"
import leads from "./leads"
import error from "./errors"
import message from "./messages"
import auth from "./auth"

export default combineReducers({
	leads,
	error,
	message,
	auth,
})
