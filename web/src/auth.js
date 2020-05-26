module.exports ={
  isAuthenticated(){
    return localStorage.getItem('userID') ? true : false;
  },
  login(token){
    localStorage.setItem('userID', token)
  },
  logout(){
    localStorage.removeItem('userID')
    console.log(localStorage.getItem('userID'))
  }
}
