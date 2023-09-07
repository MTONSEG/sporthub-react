import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slices/headerSlice";
import singinSlice from "./slices/auth/singinSlice";
import singupSlice from "./slices/auth/singupSlice";
import forgotSlice from "./slices/auth/forgotSlice";
import restoreSlice from "./slices/auth/restoreSlice";
import checkSlice from "./slices/auth/checkSlice";
import sliderAuthSlice from "./slices/auth/sliderAuthSlice";

export const store = configureStore({
	reducer: {
		header: headerSlice,
		singin: singinSlice,
		singup: singupSlice,
		forgot: forgotSlice,
		restore: restoreSlice,
		check: checkSlice,
		sliderAuth: sliderAuthSlice
	},

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch