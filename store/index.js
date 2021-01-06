export const state = ()=>({
  // token: {
  //   value: null
  // },
  // username: {
  //   value: null
  // },
  auth_token:null,
  auth_user:null,
});

export const getters = {
  isAuthenticated(state) {
    // return state.token.value != null
    return state.auth_token != null

  },

  loggedInUser(state) {
    // return state.username.value
    return state.auth_user
  },
  getToken(state){
    // return state.token.value
    return state.auth_token
  },


};

export const mutations={

  setToken(state,token){
    // state.token.value=token
    this.$auth.$storage.setLocalStorage('TokenUser', token)
    state.auth_token=this.$auth.$storage.getLocalStorage('TokenUser')
  },
  setUserName(state,name){
    // state.username.value=name
    this.$auth.$storage.setLocalStorage('UserName', name)
    state.auth_user=name
  },
  setHeader(state){
    // this.$axios.setHeader('Authorization', state.token.value)
    this.$axios.setHeader('Authorization', state.auth_token)
  },
  logoutUser(state){
    // state.token.value=null
    // state.username.value=null
    this.$auth.$storage.removeLocalStorage('TokenUser')
    state.auth_token=null
    state.auth_user=null
    this.$router.push('/')
  },
  setUserInfo(state){
    state.auth_token=this.$auth.$storage.getLocalStorage('TokenUser')
    state.auth_user=this.$auth.$storage.getLocalStorage('UserName')

  }

}



