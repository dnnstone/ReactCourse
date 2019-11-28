import { SET_CITY, SET_CITY_ID } from './../actions';
export const city=(state={},action)=> {
    switch (action.type) {
        case SET_CITY:
            
            return {...state, city: action.payload}
        case SET_CITY_ID:
            
                return {...state, cityid: action.payload}
        
        default:
            return state;
    }
}