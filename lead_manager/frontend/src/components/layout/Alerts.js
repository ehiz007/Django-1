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
			if (message.auth) alert.success(message.auth)
			if (message.password) alert.error(message.password)
		}
		if (errors !== prevProps.errors) {
			if (errors.msg.name) alert.error(`Name: ${errors.msg.name.join()}`)
			if (errors.msg.email) alert.error(`Email: ${errors.msg.email.join()}`)
			if (errors.msg.non_field_errors)
				alert.error(errors.msg.non_field_errors[0])
			if (errors.msg.username)
				alert.error(`Username: ${errors.msg.username.join()}`)
			if (errors.msg.password)
				alert.error(`Password: ${errors.msg.password.join()}`)
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
