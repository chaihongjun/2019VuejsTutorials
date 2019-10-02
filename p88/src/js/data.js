export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5]
        }
    },
    template: `
        <div>
        <p>这是一段文字</p>
        <ul class='ul'>
            <li v-for="(item,index) in arr">
                  {{index}}-{{item}}
            </li>
        </ul>
      </div>
  `
}