import {ADDSTATECOUNT} from "./mutations-types.js";

export default  {
    asnyUpdateCount(context) {
        return new Promise(resolve => {
            setTimeout(() => {
                context.commit(ADDSTATECOUNT)
                resolve("更新成功了")
            }, 1000)
        })
    }
}