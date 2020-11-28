export default  {
    getPowCount(state) {
        return state.count * state.count
    },
    /**
     * getters 里面使用getter其他方法
     * @param state
     * @param getters
     * @returns {*}
     */
    getPowCountAdd(state, getters) {
        return getters.getPowCount+2
    },
    /**
     * getter里面使用其他方法和参数
     * @param:
     * @return:
     */
    getPowCountReduce(state, getters) {
        return index => {
            return getters.getPowCount - index
        }
    }
}