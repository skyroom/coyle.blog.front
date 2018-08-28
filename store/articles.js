import { getArticlesViewList, getArticleById } from '../api/articles';

export const state = () => ({
    articlesViewlist: [],
    articleslist: [],
    article: {
        title: '',
        content: '',
        createdAt: '',
    },
});

export const mutations = {
    setArticlesViewlist(state, data) {
        state.articlesViewlist = data;
    },
    setArticle(state, data) {
        state.article = data;
    },
};

export const actions = {
    getArticlesViewList({
        commit
    }, params) {
        return new Promise((resolve, reject) => {
            getArticlesViewList(params)
            .then(data => {
                commit('setArticlesViewlist', data.data);
                resolve(data);
            }).catch(err => {
                reject(err)
            });
        })
    },
    getArticleById({
        commit
    }, params) {
        return new Promise((resolve, reject) => {
            getArticleById(params)
            .then(data => {
                commit('setArticle', data.data);
                resolve(data);
            }).catch(err => {
                reject(err)
            });
        })
    },
}
