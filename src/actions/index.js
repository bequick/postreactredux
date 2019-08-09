import {ADD_POST,DELETE_POST,FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/posts';

export const createPost = ({title,body}) => {
    return(dispatch) => {
        return axios.post(`${apiUrl}/add`, {title,body})
        .then(response => {
            dispatch(createPostSuccesses(response.data))
        })
        .catch(error => {
            throw(error);
        });
    }; 
};

export const createPostSuccess = (data) => {
    return {
        type: ADD_POST,
        payload :{
            _id:data._id,
            title:data.title,
            body:data.body
        }
    }
};

export const deletePost = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/delete/${id}`)
        .then(response => {
            dispatch(deletePostSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const fetchAllPost = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then(response => {
            dispatch(fetchPosts(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};


