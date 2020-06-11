/*
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-11 13:03:13
 * @LastEditTime: 2020-06-11 13:39:46
 */

import AV from 'leancloud-storage'

export function logIn (params) {
  return AV.User.logIn(params.username, params.password)
}

export function signUp (params) {
  // 创建实例
  const user = new AV.User()

  user.setUsername(params.username)
  user.setPassword(params.password)

  return user.signUp()
}
