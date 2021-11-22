import React, { Component } from "react";
import withCardView from "./common/withCardView";
// import { getUserCount } from "../services/userService";

class RoadService extends Component {
  state = {rS: 'None'};

//   async componentDidMount() {
//     const { data: userCount } = await getUserCount();
//     this.setState({ userCount: userCount.count });
//   }

  render() {
    return (
      <React.Fragment>
        <h3>Road Service</h3>
        <div
          className="dropdown-divider"
          style={{
            marginTop: "5px",
            marginBottom: "5px",
            borderBlockColor: "#BEE5F0",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "35px" }}>
          {this.props.data}
        </p>
        {!this.props.data && (
          <p className="text-center" style={{ fontSize: "35px" }}>
          No Service
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default withCardView(RoadService);