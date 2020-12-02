import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import propTypes from "prop-types"
import { logout } from "../../actions/auth"

export class Header extends Component {
	static propTypes = {
		auth: propTypes.object.isRequired,
		logout: propTypes.func.isRequired,
	}

	render() {
		const { isAuthenticated, user } = this.props.auth

		const authLinks = (
			<ul className="navbar-nav ml-auto mr-2 mt-2 mt-lg-0">
				{user && (
					<span className="navbar-text text-light mr-2">
						<strong>{`Hello ${user.username}`}</strong>
					</span>
				)}

				<li className="nav-item">
					<button
						className="nav-link btn btn-outline-warning btn-sm text-light"
						onClick={this.props.logout}
					>
						logout
					</button>
				</li>
			</ul>
		)

		const guestLinks = (
			<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						register
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						login
					</Link>
				</li>
			</ul>
		)

		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<a className="navbar-brand" href="/">
							Lead Manager
						</a>

						{isAuthenticated ? authLinks : guestLinks}
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Header)
