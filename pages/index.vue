<template>
<div class="">
    <info-view />
    <div class="search-wrap">
        <input id="search" class="search" placeholder="搜索..." v-model="searchKey" @input="searchHandle">
        <svg class="icon" width="25" height="25" viewBox="0 0 25 25">
            <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
        </svg>
    </div>
    <div class="article-container">
        <article-view v-if="articlesViewlist.length > 0" v-for="(item, index) in articlesViewlist" :key="index" :article="item"/>
        <div v-if="articlesViewlist.length == 0" class="empty">
            <span>
                未搜索到
            </span>
            <span class="key-words">" {{searchKey}} "</span>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import InfoView from '~/components/InfoView.vue'
import ArticleView from '~/components/ArticleView.vue'
import {
    mapMutations,
    mapActions
} from 'vuex';

export default {
    data() {
        return {
            searchKey: '',
        }
    },
    fetch ({ store, params }) {
        console.log('开始请求');
        return Vue.axios({
            // url: 'http://localhost:3001/blog/articles-view',
            url: '/blog/articles-view',
            method: 'post',
            // data: data
        })
        .then((data) => {
            console.log('data is', data);
            // store.commit('articles/setArticlesViewlist', data.data);
        })
        .catch((err) => {
            console.log('err is', err);
        });
        // return store.dispatch('articles/getArticlesViewList')
        //             .then((res) => {
        //                 // store.commit('setStars', res.data);
        //                 // console.log('前台获取结果为', res);
        //             })
        //             .catch(() => {
        //             });
    },
    components: {
        InfoView,
        ArticleView
    },
    computed: {
        articlesViewlist () {
            // console.log('this is', this.$store);
            return this.$store.state.articles.articlesViewlist;
        }
    },
    methods: {
        ...mapActions([
            'articles/getArticlesViewList',
        ]),
        searchHandle() {
            console.log('变化了。');
            this.$store.dispatch('articles/getArticlesViewList', {
                title: this.searchKey,
            })
            .then((data) => {
            })
            .catch(() => {
            });
        },
    },
    mounted() {
    }
}
</script>

<style>
.search-wrap {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 50px;
}
.search-wrap input {
    padding: 10px 25px;
    border: 1px solid #ddd;
    border-radius: 100px;
    width: 100%;
    box-sizing: border-box;
    opacity: .8;
    outline: none;
}
.search-wrap .icon {
    position: absolute;
    right: 10px;
    top: 5px;
    opacity: .3;
}
.article-container {
    width: 720px;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 100px;
}
.article-container .article-view:last-child {
    border-bottom: none;
}
.empty {
    margin-top: 30px;
    text-align: center;
    font-size: 24px;

}
.key-words {
    font-weight: 700;
}
</style>
