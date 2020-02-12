import React,{Component} from 'react';
import Auth from './Auth/Auth'
import {Route} from 'react-router-dom'
import Profile from './Profile'
import Home from './Home'
import NavBar from  './NavBar'
import dotenv from 'dotenv'
import CallBack from "./CallBack";

class  App extends Component{

   constructor(props) {
       super(props);
       dotenv.config();
       this.auth=new Auth(this.props.history)
   }

   render() {
       return (
           <>
               <NavBar/>
               <Route path="/" exact render={props=><Home auth={this.auth}{...props}/>}/>
               <Route path="/callback"  render={props=><CallBack auth={this.auth}{...props}/>}/>
               <Route path="/profile" exact render={props=><Profile auth={this.auth}{...props}/>}/>
           </>
       )
   }

}

export default App;
