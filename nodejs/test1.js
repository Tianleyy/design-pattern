const EventEmitter = require('events').EventEmitter

/**
 * TODO: node 自定义事件的简单使用
 */
// const emitter1 = new EventEmitter()

// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn1 ', info)
// })
// // 监听 some 事件
// emitter1.on('some', info => {
//   console.log('fn2 ', info)
// })

// // 触发 some 事件
// emitter1.emit('some', 'hello node.js')

/**
 * TODO: 继承
 */
// class Dog extends EventEmitter {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }

// let simon = new Dog('simon')
// simon.on('bark', function() {
//   console.log(this.name, ' barked...01...')
// })
// simon.on('bark', function() {
//   console.log(this.name, ' barked...02...')
// })
// setInterval(() => {
//   simon.emit('bark')
// }, 1500);

/**
 * TODO: stream 用到 node 的自定义事件
 */
// const fs = require('fs')
// const readStream = fs.createReadStream('./data/file1.txt')

// let length = 0
// readStream.on('data', function(chunk) {
//   let len = chunk.toString().length
//   // console.log('len -- ', len)
//   console.log(`len -- ${Math.random()} -- ${len}`)
//   length += len
// })
// readStream.on('end', function() {
//   console.log('length -- ', length)
// })

/**
 * TODO: readline 用到自定义事件
 */
const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
  input: fs.createReadStream('./data/file1.txt')
})

let lineNum = 0
rl.on('line', function(line) {
  // console.log(`line ${line}`)
  lineNum ++
})
rl.on('close', function() {
  console.log(`lineNum = ${lineNum}`)
})