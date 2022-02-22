import {createStore} from "redux"

const initialState={
    itemCount:0
}

//reducer for items count and details

function main_reducer(state,action)
{
    switch(action.type)
    {
        //add to cart
        case "ADD":
            if([action.item] in state)
                return {...state,[action.item]:state[action.item]+1,itemCount:state.itemCount+1};
            else
                return {...state,[action.item]:1,itemCount:state.itemCount+1};
        
        //remove from cart
        case "SUB":
            if(action.item in state && state[action.item]!==0)
            {
                return {...state,[action.item]:state[action.item]-1,itemCount:state.itemCount-1};
            }
            break;

        //reset cart
        case "RST":
            return {itemCount:0}
        default:
            return state;
    }
}

const mainStorage=createStore(main_reducer,initialState);

export {mainStorage};