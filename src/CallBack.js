import React,{useEffect} from "react";

const CallBack=(props)=>{


    useEffect(()=>{
       if(/access_token|id_token|error/.test(props.locaction.hash)){
         props.auth.handleAuthentication();
       }else{

       }
    });

    return(
        <h1>Loading</h1>
    )

};

export default CallBack