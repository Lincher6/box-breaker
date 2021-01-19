import {useDispatch} from "react-redux";
import Cookies from "js-cookie";
import {actions} from "store";

export const useUser = () => {
    const dispatch = useDispatch();
    const userId = Cookies.get('userId');
    if (!userId) {
        dispatch(actions.setUser({}));
    }
    return userId;
}