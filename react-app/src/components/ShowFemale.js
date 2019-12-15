import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";

class ShowFemale extends Component {
  render() {
    console.log(this.props.convertedLead.data);
    return (
      <div>
        {this.props.convertedLead.data
          .filter(item => item.gender === "female")
          .map(item => {
            return (
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src={item.picture.large} />
                <div className="card-body">
                  <div>
                    Name : {item.name.title} {item.name.first} {item.name.last}
                  </div>
                  <div>Gender : {item.gender}</div>
                  <div>Phone : {item.phone}</div>
                  <div>Age : {item.dob.age}</div>
                  <div>Email : {item.email}</div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

ShowFemale = connect(stateMapper)(ShowFemale);
export default ShowFemale;
