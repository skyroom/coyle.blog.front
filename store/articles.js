import { getArticlesViewList } from '../api/articles';

export const state = () => ({
    articlesViewlist: [],
    articleslist: [],
});

export const mutations = {
    setArticlesViewlist(state, data) {
        state.articlesViewlist = data;
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
}
