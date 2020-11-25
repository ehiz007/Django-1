import React, { Component, Fragment as tr } from "react"
import { connect } from "react-redux"
import { getLeads, deleteLead } from "../../actions/leadsActions"

class Leads extends Component {
	componentDidMount() {
		this.props.getLeads()
	}
	render() {
		return (
			<div>
				<h1>Leads List</h1>
				<table className="table table-stripped">
					<thead>
						<tr>
							<th>No.</th>
							<th>Name</th>
							<th>Email</th>
							<th>Message</th>
						</tr>
					</thead>
					<tbody>
						{this.props.leads.map((lead, index) => (
							<tr key={lead.id}>
								<td>{index + 1}</td>
								<td>{lead.name}</td>
								<td>{lead.email}</td>
								<td>{lead.message}</td>
								<td>
									<button
										onClick={() => this.props.deleteLead(lead.id)}
										className="btn btn-danger"
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	leads: state.leads.leads,
})

// const mapDispatchToProps =

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads)
