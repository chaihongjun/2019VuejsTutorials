<!--
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 09:10:07
 * @LastEditTime: 2019-09-30 09:10:07
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
# 🚀 Welcome to your new awesome project!

This project has been created using **webpack scaffold**,

webpack 内置一插件`bannerPugin`，主要是给 bundle 文件以注释形式添加内容，常用于版权声明。
使用方法是在 webpack 配置文件里的 plugin 内添加:

```
new webpack.BannerPlugin({
      banner:
        "这里写内容", // 其值为字符串，将作为注释存在
      raw: false, // 如果值为 true，将直出，不会被作为注释
      entryOnly: false // 如果值为 true，将只在入口 chunks 文件中添加
      // test: string | RegExp | Array,
      // include: string | RegExp | Array,
      // exclude: string | RegExp | Array,
    })

```

you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application
