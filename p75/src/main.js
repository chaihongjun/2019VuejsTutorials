/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-26 16:21:03
 * @LastEditTime: 2019-09-26 18:07:00
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

//加载 计算模块

const { add, mul } = require("./mathUtils.js");

import { name, version } from "./mathUtils.js";

console.log(add(1, 1));

console.log(mul(1, 10));

console.log(name);
console.log(version);
