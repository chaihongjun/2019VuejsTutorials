/*
 * @Author: ChaiHongJun
 * @Date: 2019-09-30 10:50:32
 * @LastEditTime: 2019-09-30 11:09:53
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
export default {
  template: `<div>
  <p>电影资料：</p>
  <ul>
     <li v-for="(movie,index) in movies">
       <p> 
      <span>{{index}}-</span>
       <span>片名：{{movie.name}}-</span>
       <span>导演:{{movie.director}}-</span>
       <span>类型：{{movie.gender}}</span>
       </p>
     </li>
  </ul>
  </div>`,
  data() {
    return {
      movies: [
        {
          name: "《中国机长》",
          director: "刘伟强",
          gender: "传记"
        },
        {
          name: "《攀登者》",
          director: "李仁港",
          gender: "冒险"
        },
        {
          name: "《我和我的祖国》",
          director: "陈凯歌",
          gender: "剧情"
        }
      ]
    };
  }
};
