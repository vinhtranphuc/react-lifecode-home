import axios,{requestConfig} from '../axios/axios';

//GET_TAGS
const _getTags = (data) => {
    return ({
    type: 'GET_TAGS',
    data
})};

export const getTags = (params = {
    posts_id : '',
    category_id : ''
}) => {
    return (dispatch) => {
        return axios.get('home/tags?post_id='+params.posts_id+'&category_id='+params.category_id,requestConfig()).then(result => {
            let {data} = result.data;
            dispatch(_getTags(data));
        });
    };
};