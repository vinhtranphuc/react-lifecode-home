import axios, {requestConfig}  from '../axios/axios';

//GET
const _getCategories = (data) => {
    return ({
    type: 'GET_CATEGORIES',
    data
})};

export const getCategories = () => {
    return (dispatch) => {
        return axios.get('home/categories',requestConfig()).then(result => {
            let {data} = result.data;
            dispatch(_getCategories(data));
        });
    };
};

// const _addCategory = (categories) => ({
//     type: 'ADD_CATEGORY',
//     categories
// });

// export const addCategory = (categoryObjPrm = {
//     category: '',
//     categoryType : ''
// }) => {
//     return (dispatch) => {
        
//         const category = {
//             category: categoryObjPrm.category,
//             categoryType: categoryObjPrm.categoryType
//         };
//         return axios.post('add-category', category).then(result => {
//             dispatch(_addCategory(result.data));
//         });
//     };
// };

// const _removeCategory = (categories) => ({
//     type: 'REMOVE_CATEGORY',
//     categories
// });

// export const removeCategory = (categoryIdPrm) => {
//     return (dispatch) => {
//         return axios.delete('delete-category/'+categoryIdPrm).then(result => {
//             dispatch(_removeCategory(result.data));
//         });
//     };
// };