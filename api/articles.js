// import axios from './axios'
import Vue from 'vue'

export const getArticlesViewList = (data) => {
    return Vue.axios({
        // url: 'http://localhost:3001/blog/articles-view',
        url: '/blog/articles-view',
        method: 'post',
        data: data
    });
}

export const getArticleById = (id) => {
    return Vue.axios({
        // url: `http://localhost:3001/blog/article/${id}`,
        url: `/blog/article/${id}`,
        method: 'get',
    });
}
