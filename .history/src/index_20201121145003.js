import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../src/components/Navbar"



class App extends Component{
 
  render(){
return (
<div>
<Navbar/>


</div>
)


}}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

