import auth0 from 'auth0-js'

class Auth{

  constructor(history) {
      this.history=history;
      this.auth0=new auth0.WebAuth({
          domain:process.env.REACT_APP_AUTH0_DOMAIN,
          clientID:process.env.REACT_APP_AUTH_CLIENTID,
          redirectUri:process.env.REACT_APP_AUTH0_CALLBACK_URL,
          responseType:"token id_token",
          scope:"openid profile email"
      })
  }

}
export default Auth;