import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.util";
export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeAuth = null;
  componentDidMount() {
    /* whenever there is a change in user state like signed in, 
      signed out, firebase sends a message (the user object) to the 
      application about the user's authentication state. 
      onAuthStateChanged() method is a way to take notification of 
      that message and take care of the required action.
    */
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubscribeAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
