export const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            data: state.data.filter((curElem)=>{
               return curElem.id !== action.payload;
            })
        }

    }
  return state;
}