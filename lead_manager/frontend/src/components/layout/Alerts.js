import React, { Component, Fragment } from "react"
import { withAlert } from "react-alert"
import { connect } from "react-redux"
import PropTypes from "prop-types"

class Alerts extends Component {
	static propTypes = {
		errors: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired,
	}

	componentDidUpdate(prevProps) {
		const { alert, message, errors } = this.props
		if (message !== prevProps.message) {
			if (message.leadAdded) alert.success(message.leadAdded)
			if (message.leadDeleted) alert.success(message.leadDeleted)
		}
		if (errors !== prevProps.errors) {
			if (errors.msg.name) alert.error(`Name: ${errors.msg.name[0]}`)
			if (errors.msg.email) alert.error(`Email: ${errors.msg.email[0]}`)
		}
	}
	render() {
		return <Fragment />
	}
}

const mapStateToProps = (state) => ({
	message: state.message,
	errors: state.error,
})
export default connect(mapStateToProps)(withAlert()(Alerts))
