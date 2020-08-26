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

export function formatDate (date, fmt) {
  if (typeof date === 'string') {
    return date
  }
  if (typeof date === 'number') {
    date = new Date(date)
  }

  if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss'

  if (!date || date == null) return null
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}
