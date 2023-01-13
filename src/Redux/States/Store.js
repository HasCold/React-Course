import { configureStore } from "@reduxjs/toolkit";
import  incdecSliceReducer  from "./Reducers";

export default configureStore({
    //  configurestore hamara ak function ya method ha jo redux toolkit se araha ha
    reducer :{
        number : incdecSliceReducer
    }
}, window.REDUX_DEVTOOLS_EXTENSION_ && window.REDUX_DEVTOOLS_EXTENSION_())