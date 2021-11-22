import React, { Component } from "react";
import { getVehicles } from "../services/userService";
import withCardView from "./common/withCardView";
// import { getUserCount } from "../services/userService";
import { getSubscriptionData } from "../services/userService";

class ServiceState extends Component {
  state = {service: "Inactive"};

  async componentDidMount() {
    const { data: userCount } = await getSubscriptionData();
    // const result = userCount.filter(vservicestatus => vservicestatus);
    console.log("R1", userCount.current);
    if(userCount.current != 0)
    {
      const service = "Active"
      this.setState({service});
    }
    
  }

  render() {
    return (
      <React.Fragment>
        <h3>Service Status</h3>
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
        {!this.props.data  && (
           <p className="text-center" style={{ fontSize: "35px" }}>
            {this.state.service}
           </p>
        )}
      </React.Fragment>
    );
  }
}

export default withCardView(ServiceState);