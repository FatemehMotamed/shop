export const state = ()=>({
  token: {
    value: null
  },
  username: {
    value: null
  },
});

export const getters = {
  isAuthenticated(state) {
    return state.token.value != null
    // return  state.token.value
  },

  loggedInUser(state) {
    return state.username.value
  },
};

export const mutations={

  setToken(state,token){
    state.token.value=token
  },
  setUserName(state,name){
    state.username.value=name
  },
  logoutUser(state){
    state.token.value=null
    state.username.value=null
  }
}



