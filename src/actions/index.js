import {ADD_POST,DELETE_POST,FETCH_POST } from './types';
import axios from 'axios';

conts apiUrl = 'http://localhost:4000/posts';

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

export const createPostSuccess = (data)
