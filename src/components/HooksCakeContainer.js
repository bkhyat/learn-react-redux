import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";


export const HooksCakeContainer = props =>{
    const numOfCakes = useSelector(state=> state.cake.numOfCakes);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}