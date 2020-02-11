import React,{Component} from 'react';
import Auth from './Auth/Auth'
import {Route} from 'react-router-dom'
import Profile from './Profile'
import Home from './Home'
import NavBar from  './NavBar'

class  App extends Component{

   constructor(props) {
       super(props);
       this.auth=new Auth(this.props.history)
   }

   render() {
       return (
           <>
               <NavBar/>
               <Route path="/" exact render={props=><Home auth={this.auth}{...props}/>}/>
               <Route path="/profile" exact render={props=><Profile auth={this.auth}{...props}/>}/>
           </>
       )
   }

}

export default App;
