import React, { Component } from "react"
import { connect } from "react-redux"
import { addLead } from "../../actions/leadsActions"
import propTypes from "prop-types"

export class Form extends Component {
	state = {
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	}
	// static propTypes = {
	// 	firstname: propTypes.string.isRequired,
	// 	lastname: propTypes.string.isRequired,
	// 	email: propTypes.email.isRequired,
	// 	message: propTypes.number.isRequired,
	// }
	change = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value })
	}

	submit = (e) => {
		e.preventDefault()
		const { firstname, lastname, email, message } = this.state
		this.props.addLead({
			username: firstname + " " + lastname,
			email,
			message,
		})

		this.setState({
			firstname: "",
			lastname: "",
			email: "",
			message: "",
		})
	}

	render() {
		const { firstname, lastname, email, message } = this.state
		return (
			<div className="mt-4 mb-4" style={styles}>
				<form onSubmit={this.submit}>
					<div className="form-group">
						<label htmlFor="nameinput1">First name</label>
						<input
							type="text"
							onChange={this.change}
							className="form-control"
							id="nameinput1"
							name="firstname"
							placeholder="first name"
							value={firstname}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="nameinput2">Last name</label>
						<input
							type="text"
							onChange={this.change}
							className="form-control"
							id="nameinput2"
							name="lastname"
							placeholder="last name"
							value={lastname}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Email address</label>
						<div className="input-group-prepend">
							<div className="input-group-text">@</div>
							<input
								type="email"
								onChange={this.change}
								className="form-control"
								id="exampleFormControlInput1"
								name="email"
								placeholder="name@example.com"
								value={email}
							/>
						</div>
					</div>

					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Message</label>
						<textarea
							onChange={this.change}
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							name="message"
							placeholder="optional"
							value={message}
						></textarea>
					</div>

					<button className="btn btn-primary" onSubmit={this.submit}>
						Add
					</button>
				</form>
			</div>
		)
	}
}

const styles = {
	border: ".5px solid #ced4da",
	borderRadius: "4px",
	padding: "30px",
}

export default connect(undefined, { addLead })(Form)
