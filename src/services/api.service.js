import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};

let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance('/users');
};

const getUser = (id) => {
    return axiosInstance('/users/' + id);
};

const getPosts = () => {
    return axiosInstance('/posts');
}

const getPost = (id) => {
    return axiosInstance('/posts/' + id);
}

export {
    getUsers, getUser, getPosts, getPost, axiosInstance
};