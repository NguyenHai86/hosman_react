import React from "react";
import { connect } from "react-redux";
import ManagerMotel from "./ManagerMotel/ManagerMotel";
import SignLogin from "./SignLogin/SignLogin";

class App extends React.Component {
  render() {
    return <>{this.props.user.userLogin ? <ManagerMotel /> : <SignLogin />}</>;
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(App);
