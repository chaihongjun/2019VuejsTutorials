/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-26 15:08:11
 * @LastEditTime: 2019-09-26 15:47:51
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

//对应导入方式
import * as i from "./export.js";
if (i.flag) {
  console.log(i.flag);
  console.log(i.sum(10, 10));
}

// 对象形式接收
// import { flag, sum } from "./export.js";

// if (flag) {
//   console.log(flag);
//   console.log(sum(50, 50));
// }

//如果导出的有别名这里也用别名接收
// import { qizhi, qiuhe } from "./export.js";

// if (qizhi) {
//   console.log(qizhi);
//   console.log(qiuhe(50, 50));
// }

// export default 接收
//  customName 是自定义名称
// import customName from "./export.js";
// if (customName.flag) {
//   console.log(customName.flag);
//   console.log(customName.sum(50, 50));
// }
