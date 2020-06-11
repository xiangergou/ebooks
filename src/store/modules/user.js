/*
 * @Author: liuxia
 * @Date: 2019-01-12 19:09:26
 * @Last Modified by: liuxia
 * @Last Modified time: 2019-01-14 21:46:12
 */

import { logIn, signUp } from '@/service/user'
// import { getSessionId, setSessionId, removeSessionId } from '@/utils/auth'
// import defaultAvatar from '@/assets/defaultAvatar.png'

const user = {
  state: {
    // sessionId: getSessionId(),
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_SESSIONID: (state, sessionId) => {
      state.sessionId = sessionId
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      const rolesMap = {
        '1': 'admin',
        '99': 'service',
        '0': 'global'
      }
      state.roles = rolesMap[roles.toString()] || 'global'
    }
  },
  actions: {
    Login ({ commit }, userInfo) {
      console.log(userInfo, 'userInfo')
      return new Promise((resolve, reject) => {
        logIn(userInfo).then(res => {
          resolve(JSON.parse(JSON.stringify(res)))
        }).catch(err => {
          reject(JSON.parse(JSON.stringify(err)))
        })
      })
      // return logIn(userInfo)
      // return new Promise((resolve, reject) => {
      //   AV.User.logIn(username, 'cat!@#123').then((user) => {
      //     // 登录成功
      //   }, (error) => {
      //     // 登录失败（可能是密码错误）
      //   })
      //   // loginApi.login({
      //   //   mobile,
      //   //   password: userInfo.password
      //   // }).then(response => {
      //   //   const data = response.data.data
      //   //   setSessionId(data.sessionId)
      //   //   commit('SET_SESSIONID', data.sessionId)
      //   //   resolve(data)
      //   // }).catch(error => {
      //   //   reject(error)
      //   // })
      // })
    },

    SignUp ({ commit }, userInfo) {
      console.log(userInfo, 'userInfo')
      return new Promise((resolve, reject) => {
        signUp(userInfo).then(res => {
          resolve(JSON.parse(JSON.stringify(res)))
        }).catch(err => {
          reject(JSON.parse(JSON.stringify(err)))
        })
      })
    },

    // 获取用户信息
    getUserInfo ({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   loginApi.getInfo({
      //     sessionId: state.sessionId
      //   }).then(response => {
      //     const data = response.data.data
      //     commit('SET_ROLES', data.isAdmin)
      //     commit('SET_NAME', data.name)
      //     commit('SET_AVATAR', data.picUrl || defaultAvatar)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 登出
    LogOut ({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   loginApi.logout({
      //     sessionId: state.sessionId
      //   }).then(() => {
      //     removeSessionId()
      //     commit('SET_SESSIONID', '')
      //     commit('SET_ROLES', [])
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    }
  }
}

export default user
