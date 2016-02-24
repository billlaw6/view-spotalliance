// src/auth/index.js
// django rest auth
import {router} from '../main.js'

// url and endpoint constants
const API_URL = 'http://www.spotalliance.com/'
const LOGIN_URL = API_URL + 'rest-auth/login/'
const SIGNUP_URL = API_URL + 'rest-auth/registration/'
const USER_URL = API_URL + 'rest-auth/user/'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    console.log(creds.username)
    console.log(creds.password)
    // context.$http.headers.common['Authorization'] = 'Basic bGl1YmluOndvYWluaQ='
    // context.$http.headers.common['withCredentials'] = true
    context.$http.post(LOGIN_URL, creds).then(function (response) {
      window.localStorage.setItem('id_token', response.id_token)
      this.user.authenticated = true

      // Redirect to a specified route
      if (redirect) {
        router.go(redirect)
      }
      return response
    }, function (response){
      context.error = response
    });
  },

  // Send a request to the user URL and save the user info
  get_user_info(context) {
    // context.$http.headers.common['Authorization'] = 'Basic bGl1YmluOndvYWluaQ='
    // context.$http.headers.common['withCredentials'] = true
    context.$http.get(USER_URL).then(function (response) {
      window.localStorage.setItem('headers', response.headers)
      return response
    }, function (response){
      context.error = response.data
      return response
    });
  },
  cors_test(context) {
    context.$http.put(USER_URL).then(function (response) {
      window.localStorage.setItem('headers', response.headers)
      return response
    }, function (response){
      return response
    });
  },
  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      window.localStorage.setItem('id_token', data.id_token)
      this.user.authentication = true

      if (redirect) {
        router.go(redirect)
      }
    }).error((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout () {
    window.localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth () {
    var jwt = window.localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer' + window.localStorage.getItem('id_token')
    }
  }
}
