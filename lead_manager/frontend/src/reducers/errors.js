const defaultState = {
	msg: {},
	status: null,
}

export default (state = defaultState, actions) => {
	switch (actions.type) {
		case "Get errors":
			return {
				msg: actions.payload.msg,
				status: actions.payload.status,
			}
		default:
			return state
	}
}
