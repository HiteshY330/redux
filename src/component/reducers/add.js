const InitialData={
    AddData :[],
    AddCart:[]
}
    

const AddReducer = (state=InitialData, action) =>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                AddData:[...state.AddData, action.data],
            };

            
            case "DEL":
                state.AddData = state.AddData.filter(
                    (item)=> item.id !== action.dis.id
                    );
                    return{
                        ...state,
                    };
            case "ADDCART":
                return{
                    ...state,
                    AddCart:[...state.AddCart, action.dis],
                    }
        default: return state;
    }
}

export default AddReducer;