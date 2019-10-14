<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 08:58:11
 * @LastEditTime: 2019-10-14 11:03:15
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="showData">显示数据</button>

    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>地址</th>
          <th>email</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
          <td>{{item.address}}</td>
          <td>{{item.email}}</td>
          <td>{{item.url}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "About",
  data() {
    return {
      //初始化接收数据
      tableData: []
    };
  },
  methods: {
    showData() {
      axios({
        baseURL:
          "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b/example",
        url: "/mock",
        method: "get"
      })
        .then(res => {
          // console.log(res.data.data.projects);
          // 传递数据给组件data
          this.tableData = res.data.data.projects;
          //console.log(this.tableData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>