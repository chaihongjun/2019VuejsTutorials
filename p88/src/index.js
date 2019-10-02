//入口文件啊
//导入其他模块
import son from './js/data.js'

import Vue from 'vue'

//导入CSS
import './css/app.css'
import './css/index.css'


//实例化Vue
new Vue({
    el: '#app',
    components: {
        son
    },
    template: '<son></son>'
})