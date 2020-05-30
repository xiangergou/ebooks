'use strict'

import AV from 'leancloud-storage'
// import store from '../store'

// let user = store.state.user ? store.state.user[0] : '0'
// console.log(user)

export function getBooks (id) {
  const grapes = new AV.Query('Books')
  grapes.descending('createdAt').toJSON()
  return grapes.find()
}

// function queryWine (data) {
//   const grapes = new AV.Query('wine')
//   grapes.descending('createdAt')
//   return grapes.find()
// }

// function queryInn (data) {
//   const inn = new AV.Query('inn')
//   inn.descending('createdAt')
//   return inn.find()
// }

// function setInn (id) {
//   let inn = AV.Object.createWithoutData('inn', id)
//   inn.set('rented', true)
//   return inn.save()
// }

// function queryOrder (data) {
//   const orders = new AV.Query('orders')
//   orders.descending('createdAt')
//   return orders.find()
// }

// function queryEvaluete () {
//   const evaluate = new AV.Query('evaluate')
//   evaluate.descending('createdAt')
//   return evaluate.find()
// }

// function queryInnBook (data) {
//   const orders = new AV.Query('innbook')
//   orders.descending('createdAt')
//   return orders.find()
// }

// export default {
//   getBooks,
//   queryWine,
//   queryInn,
//   setInn,
//   queryOrder,
//   queryEvaluete,
//   queryInnBook
// }
