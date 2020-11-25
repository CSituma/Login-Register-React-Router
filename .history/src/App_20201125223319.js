import React from "react";
import "./App.scss";
import { Login, Register,Toggler } from "./components/login/index";

class App extends React.Component {
    state = {
      LoggedIn: true
    };
  
  componentDidMount() {

    this.toggler.classList.add("right");
  }

  changeState = ()=> {
    const { LoggedIn } = this.state;
    if (LoggedIn) {
      this.toggler.classList.remove("right");
      this.toggler.classList.add("left");
    } else {
      this.toggler.classList.remove("left");
      this.toggler.classList.add("right");
    }
    this.setState(prevState => ({ LoggedIn: !prevState.LoggedIn }));
  }

  render() {
    const { LoggedIn } = this.state;
    const current = LoggedIn ? "Register" : "Login";
    const currentActive = LoggedIn ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" >
            {LoggedIn && (
              <Login />
            )}
            {!LoggedIn && (
              <Register/>
            )}
          </div>
          <Toggler
            current={current}
            currentActive={currentActive}
            togglerRef={ref => (this.toggler = ref)}
            onClick={this.changeState}
          />
        </div>
      </div>
    );
  }
}



export default App;
