import {
	combineReducers
} from 'redux';
import  productRouter from './product/reducer';


const reducer = combineReducers({
	product:productRouter
});

export default reducer;