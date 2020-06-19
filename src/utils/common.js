/*
 * @Description:
 * @LastEditors: liuxia
 * @Date: 2020-06-19 10:45:02
 * @LastEditTime: 2020-06-19 12:19:48
 */
/**
 * 数组转成树状结构
 * @param {*} data
 * @param {*} pid
 */
export function filterArray (data, pid = '') {
  let tree = []
  let temp
  for (let i = 0; i < data.length; i++) {
    if (data[i].pid === pid) {
      let obj = data[i]
      temp = filterArray(data, data[i].objectId)
      if (temp.length > 0) {
        obj.subs = temp
      }
      tree.push(obj)
    }
  }
  return tree
}

/**
 * 时间戳转为日期格式
 * @param {*} m
 */
function addZero (m) {
  return m < 10 ? '0' + m : m
}
export function transformTime (timestamp = +new Date()) {
  if (timestamp) {
    const time = new Date(timestamp)
    const y = time.getFullYear()
    const M = time.getMonth() + 1
    const d = time.getDate()
    const h = time.getHours()
    const m = time.getMinutes()
    const s = time.getSeconds()
    return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s)
  } else {
    return ''
  }
}
