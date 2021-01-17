export default function (context) {
  if (context.store.getters['isAuthenticated']) {
    return context.redirect('/')
  }
  // console.log(context.store.getters['isAuthenticated'])
}
