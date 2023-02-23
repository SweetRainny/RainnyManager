import type { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex'
import getters from './getters'
// import user from './modules/user'



// 配置选项中的接口
interface State {
  age: number
}

// 这个key需要在组件中引入 store时使用, 没有会报错 --> useStore(key) 
export const key: InjectionKey<Store<State>> = Symbol()



const moduleFiles : any = import.meta.glob('./modules/*.ts', { eager: true });
console.log("moduleFiles-------", moduleFiles)
const modules : { [key: string]: any } = {};

// for (let key in moduleFiles) {
//   modules.user = "res.default"
//   moduleFiles[key]().then((res:any)=>{
//       modules[key.match(/\.\/modules\/(.*?).ts/)![1]] = res.default
//   }).then(() => {
//     console.log('modules9999999', modules)
//     console.log(modules.user)
//   })
// }

for (const key in moduleFiles) {
  modules[key.match(/\.\/modules\/(.*?).ts/)![1]] = moduleFiles[key].default
}



const store = createStore({
  modules,
  getters,
  state () {
    return {
      test: "test text999"
    }
  },
  // mutations: {
  //   increment (state) {
  //     state.count++
  //   }
  // }
})

export default store;