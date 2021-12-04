

import {buyCake} from "../redux";
import {connect} from "react-redux";
import {useState} from "react";

const NewCakeContainer = (props) =>{
    const [number, setNumber] = useState(1);
    return(
        <div>
            <h2>Number of Cakes {props.numOfCakes}</h2>
            <input type={'number'} value={number} onChange={e=>setNumber(Number(e.target.value))} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);