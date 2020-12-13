import Cookie from 'js-cookie'

export const state = ()=>({
  token: {
    value: null
  },
});

export const getters = {
  // getUser(state){
  //  return state.user
  // },
  isAuthenticated(state) {
    // return state.auth.loggedIn
    // return state.token != null
    // return "da"
    return  state.token.value
    // return this.$auth.$storage.getLocalStorage('t')
  },

  loggedInUser(state) {
    return state.auth.user
  },
  getCookieUser(state){
    // return $auth.$storage.getCookie('lu')
    return Cookie.get('user_login')
  }
};

export const mutations={
  set_cookie_user(state){
    // this.$auth.$storage.setCookie('lu', state.auth.user,{ expires: 5  })
    Cookie.set('user_login', state.auth.user,{ expires: 5  })
  },
  setToken(state,token){
    state.token.value=token
  }
}



