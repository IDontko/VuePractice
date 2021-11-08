import {name, age, height} from "./js/mathUtil.js"

console.log(name)

console.log(age)

console.log(height)

// 依赖css文件
const css = require ('./css/normal.css')

require ('./css/special.less')
document.writeln('<h2>我的测试</h2>')
console.log(css)