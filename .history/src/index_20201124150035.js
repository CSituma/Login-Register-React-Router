import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../src/components/Navbar"
import Login from "../src/components/Login"


class App extends Component{
 
  render(){
return (
<div>
<Navbar/>
<Login/>

</div>
)


}}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

