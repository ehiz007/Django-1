const defaultState = {}

export default (state = defaultState, actions) => {
	switch (actions.type) {
		case "Create lead":
			return actions.payload
		default:
			return state
	}
}
