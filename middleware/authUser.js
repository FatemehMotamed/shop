export default function (context) {
  if (!context.store.getters['isAuthenticated']) {
    return context.redirect('/login')
  }
  // console.log(context.store.getters['isAuthenticated'])
}
