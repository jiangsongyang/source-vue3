import { h, ref } from '../../packages/vue/dist/vue.esm.js'

/**
 * 提供 render 函数
 */
// export const App = {
//   render() {
//     return h(
//       'div',
//       {
//         id: 'root',
//         onClick() {
//           console.log('click', this)
//         }
//       },
//       // test string child
//       `hi - ${this.msg}`
//       // test array child
//       // [
//       //   h('p', {}, 'this is p tag'),
//       //   h('p', {}, [h('div', {}, 'this is child div')]),
//       // ]
//     )
//   },
//   setup() {
//     return {
//       msg: 'mini-vue'
//     }
//   }
// }
/**
 * 无 render 函数
 */
export const App = {
  setup() {
    const msg = ref('vue3')
    const handleClick = () => {
      msg.value = 'vue3 changed'
    }
    return {
      msg,
      handleClick
    }
  }
}
