/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-26 14:39:45
 * @LastEditTime: 2019-09-26 14:39:45
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
let name = "小明";
let age = 12;

function sum(num1, num2) {
  return num1 + num2;
}
let flag = true;

if (flag) {
  console.log(sum(10, 20));
}
module.exports = {
  flag: flag,
  sum: sum
};
