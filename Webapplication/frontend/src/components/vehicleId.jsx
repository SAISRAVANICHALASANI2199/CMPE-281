import React, { Component } from "react";
import withCardView from "./common/withCardView";
import Table from "./common/table";
import _ from "lodash";

class VehicleId extends Component {
    state = { vid: "N/A",
      };

      columns = [
        { path: "vid", label: "Vehicle License Plate" },
      ];

  render() {
    return (
      <React.Fragment>
        <h3>Vehicle License Plate </h3>
        <div
          className="dropdown-divider"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "30px" }}>
        {this.props.data}
        </p>
        {!this.props.data && this.props.data.length === 0 && (
           <p className="text-center" style={{ fontSize: "30px" }}>
           {this.state.vid}
           </p>
        )}
      </React.Fragment>
    );
  }
}

export default withCardView(VehicleId);