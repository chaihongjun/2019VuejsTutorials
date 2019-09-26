/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-26 15:08:16
 * @LastEditTime: 2019-09-26 15:45:53
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

// 导出模块

let name = "小米";
let age = 10;
let flag = true;

function sum(sum1, sum2) {
  return sum1 + sum2;
}

if (flag) {
  console.log(sum(20, 30));
}

//导出模块属性和方法

// 对象形式列出需要导出的属性和方法
export { flag, sum };

// 也可以给模块内属性或方法起别名
//export { flag as qizhi, sum as qiuhe };

//export default {} 允许接收方自定义名称
//export default { flag, sum };
