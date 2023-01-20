import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor (){
super()
this.state={
  user:null,
  password:null

}
  }
  submit(){
    console.warn(this.state)
  }
  render()
  {
  return (
    <div>
<form>
  <h1>Form Handling </h1>
  <label htmlFor="">Enter Name</label><br/>
  <input type="text" 
  placeholder ="Name" 
  name="user" 
  onChange={(e)=>{this.setState({user:e.target.value})}}
  />
  <br/><br/>
  <label htmlFor="">Enter Password</label><br/>
  <input type="password" 
  placeholder ="Password"  
  name="password"
  onChange={(e)=>{this.setState({password:e.target.value})}}
   />
</form>
<br/>
<button onClick={()=>this.submit()}>Submit</button>
    </div>
  );
}
}
