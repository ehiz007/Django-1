import React, { Component, Fragment } from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import store from "../store"
import Header from "./layout/Header"
import Dashboard from "./leads/Dashboard"
import Alerts from "./layout/Alerts"

const alertOptions = {
	timeout: 2500,
	position: positions.TOP_CENTER,
	transiton: transitions.SCALE,
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Fragment>
						<Header />
						<Alerts />
						<div className="container">
							<Dashboard />
						</div>
					</Fragment>
				</AlertProvider>
			</Provider>
		)
	}
}

ReactDom.render(<App />, document.getElementById("app"))
