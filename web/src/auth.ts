export default {
    isAuthenticated(){
      return localStorage.getItem('userID') ? true : false;
    },
    login(token : string){
      localStorage.setItem('userID', token)
    },
    logout(){
      localStorage.removeItem('userID')
      console.log(localStorage.getItem('userID'))
    }
  }
  