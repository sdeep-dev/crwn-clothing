import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../../components/formInput/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.util';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Sign In</h1>
        <h2>I already have an account</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton isGoogleSignIn onClick = {signInWithGoogle} >Sign In With Google</CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
