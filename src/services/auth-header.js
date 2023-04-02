export default function authHeader(token) {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}
