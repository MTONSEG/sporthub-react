import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slices/header/headerSlice";
import singinSlice from "./slices/auth/singinSlice";
import singupSlice from "./slices/auth/singupSlice";
import forgotSlice from "./slices/auth/forgotSlice";
import restoreSlice from "./slices/auth/restoreSlice";
import checkSlice from "./slices/auth/checkSlice";
import sliderAuthSlice from "./slices/auth/sliderAuthSlice";
import personalSlice from "./slices/auth/personalSlice";
import alertSlice from "./slices/alert/alertSlice";
import userSlice from "./slices/home/userSlice";
import categorySliderSlice from "./slices/home/categorySliderSlice";
import homeListSlice from "./slices/home/listVideoSlice";
import subscriptionSlice from './slices/userInfo/userInfoSlice';
import videoSlice from './slices/video/videoSlice';

export const store = configureStore({
	reducer: {
		header: headerSlice,
		singin: singinSlice,
		singup: singupSlice,
		forgot: forgotSlice,
		restore: restoreSlice,
		check: checkSlice,
		sliderAuth: sliderAuthSlice,
		personalAuth: personalSlice,
		alert: alertSlice,
		users: userSlice,
		sliderCat: categorySliderSlice,
		videoList: homeListSlice,
		userInfo: subscriptionSlice,
		videos: videoSlice
	},

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch