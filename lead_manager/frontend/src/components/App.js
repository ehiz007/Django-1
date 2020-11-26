import React, { Component, Fragment } from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import store from "../store"
import Header from "./layout/Header"
import Dashboard from "./leads/Dashboard"
import Alerts from "./layout/Alerts"
import Login from "./accounts/Login"
import Register from "./accounts/Register"
import PrivateRoute from "./common/PrivateRoute"
import { loadUser } from "../actions/auth"

const alertOptions = {
	timeout: 2500,
	position: positions.TOP_CENTER,
	transiton: transitions.SCALE,
}

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser())
	}
	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Router>
						<Fragment>
							<Header />
							<Alerts />
							<div className="container">
								<Switch>
									<PrivateRoute exact path="/" component={Dashboard} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertProvider>
			</Provider>
		)
	}
}

ReactDom.render(<App />, document.getElementById("app"))
