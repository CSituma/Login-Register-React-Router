import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../src/components/Navbar"
import login from "../src/components/login"


class App extends Component{
 
  render(){
return (
<div>
<Navbar/>
<login/>

</div>
)


}}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

