// 理解为自定义事件、自定义回调
var callbacks = $.Callbacks() // 注意这里的大小写

callbacks.add(function(info) {
  console.log('fn1', info)
})
callbacks.add(function(info) {
  console.log('fn2', info)
})
callbacks.add(function(info) {
  console.log('fn3', info)
})

callbacks.fire('gogogo')
callbacks.fire('fire')