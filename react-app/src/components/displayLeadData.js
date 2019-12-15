import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";
import { convertLead } from "../redux/converted/convertedLeadAction";
import { getConvertedLeadCount } from "../redux/leadCounts/leadCountAction";
import "../App.css";
class DisplayLeadData extends Component {
  getCheckBoxValue = e => {
    var convertedLeadData = this.props.leadData.data;
    console.log(convertedLeadData);
    if (e.target.checked) {
      this.props.dispatch(getConvertedLeadCount());
      this.props.dispatch(convertLead(convertedLeadData));
    }
  };
  render() {
    return (
      <div className="container leadData-bg mt-4 ">
        <h3 className="text-center text-white">Lead Data</h3>
        <div className="row mb-4">
          <div className="col-4 pl-5">
            <img
              src={this.props.leadData.data.picture.large}
              style={{ height: 200 + "px" }}
              alt="lead-img-data"
            />
          </div>
          <div className="col-8 text-white">
            <p>
              {" "}
              Name : {this.props.leadData.data.name.title}{" "}
              {this.props.leadData.data.name.first}{" "}
              {this.props.leadData.data.name.last}
            </p>
            <p> Age : {this.props.leadData.data.dob.age} Y </p>{" "}
            <p> Gender : {this.props.leadData.data.gender} </p>
            <p> Email : {this.props.leadData.data.email} </p>
            <p> Phone : {this.props.leadData.data.phone} </p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <label>
                    Convert This Lead &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onClick={this.getCheckBoxValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(stateMapper)(DisplayLeadData);
