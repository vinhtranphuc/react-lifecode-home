import { createStore, applyMiddleware } from "redux";
import categories from '../reducers/categoriesReducer';
import thunk from 'redux-thunk';

export default () => {
    return createStore(categories, applyMiddleware(thunk));
};