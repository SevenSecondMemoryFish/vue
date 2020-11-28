import { ADDSTATECOUNT } from "./mutations-types.js";

export default {
    /**
     * 使用定义常量方式来定义方法
     * @param state
     * @param index
     */
    [ADDSTATECOUNT](state, index) {
        state.count += index
    },
    reduceStateCount(state) {
        state.count -= 1
    }
}
