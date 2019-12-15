import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";
import { getLead as getLeadAction } from "../redux/getLead/getLeadAction";
import { getLeadCount } from "../redux/leadCounts/leadCountAction";
import DisplayLeadData from "./displayLeadData";
import ConvertedLeadData from "./convertLead";
import ShowMale from "../components/ShowMale";
import ShowFemaleLead from "./ShowFemale";
class GetLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: []
    };
  }

  getLeadBtn = () => {
    this.props.dispatch(getLeadAction());
    this.props.dispatch(getLeadCount());
  };
  showAllLeads() {
    console.log(this.props);
    this.setState({
      showComponent: [<ConvertedLeadData />]
    });
  }
  showMaleLeads() {
    console.log(this.props);
    this.setState({
      showComponent: [<ShowMale />]
    });
  }
  showFemaleLeads() {
    console.log(this.props);
    this.setState({
      showComponent: [<ShowFemaleLead />]
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="contsiner m-5 ">
        <div className="row">
          <h4 className="col-4 pt-1">
            Current Status :{" "}
            <strong>
              {this.props.leadCount.convertedLeads} /{" "}
              {this.props.leadCount.totalLeads}
            </strong>
          </h4>
          <div className="col-8">
            <button className="btn btn-primary" onClick={this.getLeadBtn}>
              Get New Lead
            </button>{" "}
            <button
              className="btn btn-primary"
              onClick={() => this.showAllLeads()}
            >
              Show All
            </button>{" "}
            <button
              className="btn btn-primary"
              onClick={() => this.showMaleLeads()}
            >
              Show Males
            </button>{" "}
            <button
              className="btn btn-primary"
              onClick={() => this.showFemaleLeads()}
            >
              Show Females
            </button>
          </div>
          {this.props.leadData.data === undefined ? null : <DisplayLeadData />}
          <div className="box-container">
            {this.state.showComponent.map(child => child)}
          </div>
        </div>
      </div>
    );
  }
}

GetLead = connect(stateMapper)(GetLead);
export default GetLead;
