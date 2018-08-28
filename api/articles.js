import axios from './axios'

export const getArticlesViewList = (data) => {
    return axios({
        url: 'http://localhost:3001/blog/articles-view',
        method: 'post',
        data: data
    });
}

export const getArticleById = (id) => {
    return axios({
        url: `http://localhost:3001/blog/article/${id}`,
        method: 'get',
    });
}
