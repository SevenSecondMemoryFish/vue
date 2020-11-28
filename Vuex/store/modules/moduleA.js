/**
 * 定义一个模块
 * @type {{mutations: {}, state: {name: string}, getters: {}, actions: {}}}
 * 注意：模块的state， getters，mutations，actions都会合并到rootState里面去，
 * 只是，state在rootState里面使用的key对应的是对象
 * 注意：模块里面的getters，mutations，actions不能和root里面名称不能一致，不然会module被覆盖掉，以及报错
 */
export default {
    state: {
        name: "七秒"
    },
    mutations: {
        updateName(state) {
            state.name = "sevensecond"
        }
    },
    getters: {
        getFullName(state) {
            return state.name + "--  哈哈哈"
        },
        /**
         * 使用rootState里面的state数据
         * @param state 当前模块的state
         * @param pla
         * @param rootState 标识根的state
         * @returns {string}
         */
        getFullName2(state,pla,rootState) {
            console.log(state);
            return state.name + "---" + rootState.count
        }
    },
    actions: {
        aUpdateName(context) {
            /**
             * 注意：此context 标识当前模块下面的上下文，
             * 但是它里面包含rootState,rootGetters,getters ,states,commit
             * 注意：可以commit 模块里面的 mutations里面的方法，也可以commit 主store里面方法
             */
            console.log(context);
            setTimeout(()=>{
                context.commit('reduceStateCount')
            },1000)

        }
    }

}