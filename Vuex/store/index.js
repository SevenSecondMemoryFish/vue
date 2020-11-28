/**
 * 使用npm 安装vuex 的时候，设置
 */
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import moduleA from "./modules/moduleA.js";


const state = {
    count: 10
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    /**
     * 分模块使用store
     */
    modules: {
        a: moduleA
    }
})
export default store