// class People {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   eat() {
//     console.log(`${this.name} eat something.`)
//   }
//   speak() {
//     console.log(`My name is ${this.name}, age is ${this.age}`)
//   }
// }

// class Student extends People {
//   constructor(name, age, number) {
//     super(name, age)
//     this.number = number
//   }
//   study() {
//     console.log(`${this.name}, 学号为${this.number}, 正在图书馆学习。`)
//   }
//   speak() {
//     console.log(`我是${this.name}, 重写了speak方法。`)
//   }
// }

// // let tianle = new People('天乐', 24)
// // tianle.eat()
// // tianle.speak()

// // let mingzhu = new Student('明珠', 18, 'A001')
// // mingzhu.eat()
// // mingzhu.speak()
// // mingzhu.study()

// class jQuery {
//   constructor(selector) {
//     let slice = Array.prototype.slice
//     let dom = slice.call(document.querySelectorAll(selector))
//     let len = dom ? dom.length : 0
//     for (let i = 0; i < len; i++) {
//       this[i] = dom[i]
//     }
//     this.length = len
//     this.selector = selector || ''
//   }
//   append(node) {

//   }
//   addClass(name) {

//   }
//   html(data) {

//   }
//   // 此处省略N个API
// }

// window.$ = function(selector) {
//   return new jQuery(selector)
// }

// // 测试代码
// var $p = $('p')
// console.log($p)
// console.log($p.addClass)

// class People {
//   constructor(name, house) {
//     this.name = name
//     this.house = house
//   }
//   saySomething() {

//   }
// }

// class A extends People {
//   constructor(name, house) {
//     super(name, house)
//   }
//   saySomething() {
//     console.log('I am A')
//   }
// }

// class B extends People {
//   constructor(name, house) {
//     super(name, house)
//   }
//   saySomething() {
//     console.log('I am B')
//   }
// }

// class House {
//   constructor(city) {
//     this.city = city
//   }
//   showCity() {
//     console.log(`House is in ${this.city}`)
//   }
// }

// let aHouse = new House('深圳')
// let a = new A('a', aHouse)
// a.saySomething()
// console.log(a.house)

// function loadImg(src) {
//   return new Promise((resolve, reject) => {
//     let img = document.createElement('img')
//     img.onload = () => {
//       resolve(img)
//     }
//     img.onerror = () => {
//       reject('图片加载失败')
//     }
//     img.src = src
//   })
// }

// const src = 'https://www.wallpaperup.com/uploads/wallpapers/2015/05/03/678222/cab14cb315bbf97fcfe0c0ccd7d73d42-375.jpg'
// // const src = ''
// loadImg(src)
//   /**
//    * 单一封闭原则 => 一个then函数只做一件事情
//    * 当后续需要添加需求的时候，再增加一个then函数去实现需求，而不是在原来的then函数上进行修改.
//    */
//   .then(img => { // 例子：获取img
//     console.log(img)
//     return img
//   })
//   .then(img => { // 例子：获取图片的宽度和高度
//     console.log(img.width, img.height)
//   })
//   .catch(e => {
//     console.log(e)
//   })

// 车的父类
class Car {
  constructor(number, name) {
    this.number = number
    this.name = name
  }
}

// 快车继承车
class KuaiChe extends Car {
  constructor(number, name, price = 1) {
    super(number, name)
    this.price = price
  }
}

// 专车继承车
class ZhuanChe extends Car {
  constructor(number, name, price = 2) {
    super(number, name)
    this.price = price
  }
}

// 行程
class Trip {
  constructor(car) {
    this.car = car
  }
  start() {
    console.log(`行程开始, 名称: ${this.car.name},车牌号: ${this.car.number}`)
  }
  end(distance = 5) {
    console.log(`行程结束, 总共 ${distance} 公里, 价格: ${this.car.price * distance}`)
  }
}

// let car = new KuaiChe(100, '桑塔纳')
let car = new ZhuanChe(200, '荣威')
let trip = new Trip(car)
trip.start()
trip.end()
