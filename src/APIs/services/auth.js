
import api from "../axios";

class Auth {
  constructor( request) {}

  async Login(data){
    return this.request.post("", data)
  }

  async FetchDetails(data){
    return this.request.post("", data)
  }

  async GenerateStatement(data){
    return this.request.post("", data)
  }

 
}



const AuthService = new Auth(api)

export default AuthService
