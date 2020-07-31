class TPeople {
  name
  age
  protected weight // 受保护的属性，只有自己或子类可以访问
  constructor(name, age) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat() {
    console.log(`${this.name} 喜欢吃草莓`)
  }
  speak() {
    console.log(`My name is ${this.name}, age is ${this.age}`)
  }
}

class TStudent extends TPeople {
  number
  private girlfriend
  constructor(name, age, number) {
    super(name, age)
    this.number = number
    this.girlfriend = "明珠"
  }
  study() {
    console.log(`${this.name} 和女朋友${this.girlfriend}正在图书馆学习, 座位号是${this.number}`)
  }
  getWeight() {
    console.log(`称了一下体重, 数值为${this.weight}`)
  }
}

let youtianle = new TStudent('天乐', 24, 'A12')
youtianle.study()
youtianle.getWeight()
// console.log(youtianle.weight)
// console.log(youtianle.girlfriend)