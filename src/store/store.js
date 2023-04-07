import { createStore } from "redux";
import setEditable from "./reducer/editable";

// 通过createStore函数创建store，传入参数中第一个是reducer，第二个是初始的state值（可省略）
const store = createStore(setEditable, true);
export default store;
