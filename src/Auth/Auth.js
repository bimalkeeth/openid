import auth0 from 'auth0-js'

class Auth{

  constructor(history) {
      const ff= process.env.REACT_APP_AUTH0_DOMAIN;
      this.history=history;
      this.auth0=new auth0.WebAuth({
          domain:process.env.REACT_APP_AUTH0_DOMAIN,
          clientID:process.env.REACT_APP_AUTH_CLIENT_ID,
          redirectUri:process.env.REACT_APP_AUTH0_CALLBACK_URL,
          responseType:"token id_token",
          scope:"openid profile email"
      })
  }

   login=()=>{
     this.auth0.authorize();
   };

  handleAuthentication=history=>{
      this.auth0.parseHash((err,authResult)=>{
          if(authResult && authResult.accessToken && authResult.idToken){
              this.setSession(authResult);
              this.history("/");
          }else if(err){
              this.history("/")
          }
      })

  };

  setSession(authResult) {
        const expireAt=JSON.stringify(authResult.expiresIn *1000 + new Date().getTime())
        localStorage.setItem("access_token",authResult.access_token);
        localStorage.setItem("id_token",authResult.id_token);
        localStorage.setItem("expires_at",expireAt);
  }

  isAuthenticated(){
      const expiresAt=JSON.stringify(localStorage.getItem("expires_at"));
      return new Date().getTime()<expiresAt;
  }
  logout=()=>{
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
      this.auth0.logout({
         clientID:process.env.REACT_APP_AUTH_CLIENT_ID,
         returnTo:"http://localhost:3000"
      });

  }

}
export default Auth;