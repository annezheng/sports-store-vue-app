import Axios from "axios";
const loginUrl = "http://localhost:3500/login";
// const loginUrl = "/api/login";

export const authenticate = async function(context, credentials) {
  let response = await Axios.post(loginUrl, credentials);
  if (response.data.success == true) {
      context.commit("setAuthenticated", response.data.token);
      localStorage.setItem('token', response.data.token)
      const now = new Date()
      const expireDate = new Date(
        now.getTime() + response.data.expiresIn * 1000
      )
      localStorage.setItem('expireDate', expireDate)
  }
}

export const tryAutoSignin = ({ commit }) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  const expireDate = localStorage.getItem('expireDate')
  const now = new Date()
  if (now >= expireDate) {
    return
  }
  commit("setAuthenticated", token);
}

export const logout = ({ commit }) => {
  commit('clearAuthentication')
  localStorage.removeItem('token')
  localStorage.removeItem('expireDate')
}


