/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-26 16:21:19
 * @LastEditTime: 2019-09-26 18:03:11
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

let name = "webpack";
let version = 4;

//导出模块内容

module.exports = {
  add,
  mul
};

export { name, version };
