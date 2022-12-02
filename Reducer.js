
// .........................................................................................
// step..2
// const initialState=0;


// step..3
// const reducer =(state,action)=>{
// if(action.type === "INCREMENT"){
//     return state + 1;
// }
// else if(action.type === "DECREMENT"){
//     return state -1;
// }
// }

// step..1
// const [state,dispatch]=useReducer(reducer,initialState)

// example...........
//  <h5 class="Child-title">{state}</h5>
// <div className="mt-4">

//  <button type="button" onClick={()=>dispatch({type:"DECREMENT"})} class="btn btn-primary mx-2">Decrement</button>
 
//  <button type="button" onClick={()=>dispatch({type:"INCREMENT"})}  class="btn btn-primary mx-2">Increment</button> 
//  ...........................................................................................





{/* 
// .............PAYLOAD........................................................................

const initialState=0;
const reducer =(state,action)=>{
if(action.type === "INCREMENT"){
    return state + action.payload;
}
else if(action.type === "DECREMENT"){
    return state - action.payload;
}

}
const [state,dispatch]=useReducer(reducer,initialState)


return
<button type="button" onClick={()=>dispatch({type:"DECREMENT",payload:5})} class="btn btn-primary mx-2">Decrement</button>
// ................PAYLOAD.................................................................. */}