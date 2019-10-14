<!--
 * @Author: ChaiHongJun
 * @Date: 2019-10-14 11:30:54
 * @LastEditTime: 2019-10-14 17:00:38
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="showData">显示并发请求的数据</button>

    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr>
          <th>url</th>
          <th>email</th>
          <th>address</th>
          <th>string</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in lists" :key="index">
          <td scope="row">{{item.url}}</td>
          <td>{{item.email}}</td>
          <td>{{item.address}}</td>
          <td>{{item.string}}</td>
        </tr>
      </tbody>
    </table>
    <hr />

    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-inverse">
        <tr v-for="(visitor,key,index) in visitors" :key="index">
          <th>{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(visitor,key,index) in visitors" :key="index">
          <td>{{visitor}}</td>
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
      lists: [],
      visitors: {}
    };
  },
  methods: {
    showData() {
      axios
        .all([
          axios({
            url:
              "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b/example/mock"
          }),
          axios({
            url:
              "http://192.168.0.222:7300/mock/5d98362bb601f70efc7c1d7b/example/query",
            params: {
              name: "chj"
            }
          })
        ])
        .then(
          axios.spread((res1, res2) => {
            console.log(res1);
            console.log(res2);

            this.lists = res1.data.data.projects;

            this.visitors = res2.data.data._req.header;

            // console.log(this.visitors instanceof Object); //true
            // console.log(this.visitors.host);
            // console.log(this.visitors["user-agent"]);
          })
        )
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>