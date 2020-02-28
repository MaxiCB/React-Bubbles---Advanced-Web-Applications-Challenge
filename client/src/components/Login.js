import React from "react";

// Redux
import { connect } from "react-redux";
import { userLogin } from "../actions/actions";


const Login = props => {

  const tempUser = { username: 'Lambda School', password: 'i<3Lambd4' }

  const login = user => {
    let userLogin = props.userLogin;
    userLogin(user);
    props.history.push("/bubble-page")
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <button onClick={e => login(tempUser)}>Login</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.userToken,
    userTokenLoading: state.userTokenLoading,
    userTokenError: state.userTokenError
  }
}

export default connect(mapStateToProps, { userLogin})(Login);