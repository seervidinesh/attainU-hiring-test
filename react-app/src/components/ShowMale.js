import React, { Component } from "react";
import { connect } from "react-redux";
import { stateMapper } from "../redux/store";

class ShowMale extends Component {
  render() {
    console.log(this.props.convertedLead.data);
    return (
      <div>
        {this.props.convertedLead.data
          .filter(item => item.gender === "male")
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

ShowMale = connect(stateMapper)(ShowMale);
export default ShowMale;
