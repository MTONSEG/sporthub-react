// .catch (error => {
// 	dispatch(setVarianError());
// 	dispatch(setMessage(getClearMessage(error.code)));
// 	dispatch(showAlert(true));

import { setMessage, setVarianError, setVarianMess, showAlert } from "../redux/slices/alert/alertSlice";
import { useAppDispatch } from "../hooks/hooks";
import { getClearMessage } from "./getErrorMessage";

// 	setTimeout((): void => {
// 		dispatch(showAlert(false));
// 		dispatch(setVarianMess());
// 	}, 3000)
// })

const dispatch = useAppDispatch();

