<template>
<div class="">
    <div class="article-contanier">
        <div class="title" v-text="article.title"></div>
        <div class="adition">
            <img class="avator" :src="avatorSrc" />
            <router-link to="/about" class="author">{{ author }}</router-link>
            <span class="time" v-text="article.createdAt"></span>
        </div>
        <div class="article-content">
            <mavon-editor :toolbarsFlag="false" :subfield="false" defaultOpen="preview" v-model="article.content"/>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapMutations,
    mapActions
} from 'vuex';
import config from '../../config';
import 'mavon-editor/dist/css/index.css';

export default {
    data() {
        return {
            author: config.author,
            avatorSrc: config.avatorSrc,
        }
    },
    fetch ({ store, params }) {
        return store.dispatch('articles/getArticleById', params.id)
                    .then((res) => {
                        // store.commit('setStars', res.data);
                        // console.log('前台获取结果为', res);
                    })
                    .catch(() => {
                    });
    },
    computed: {
        article () {
            // console.log('this is', this.$store);
            return this.$store.state.articles.article;
        }
    },
    methods: {
        ...mapActions([
            'articles/getArticlesViewList',
        ]),
    },
    mounted() {
    }
}
</script>

<style>
.article-contanier {
    max-width: 700px;
    margin: 0 auto;
}
.title {
    color: rgb(41, 56, 70);
    line-height: 42px;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}
.adition {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 30px;
}
.adition .avator {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
}

.adition .author {
    text-decoration: none;
    color: rgb(41, 56, 70);
    margin-right: 10px;
}

.adition .time {
    color: #7f8c8d;
}
.article-content .v-note-wrapper .v-note-panel.shadow {
    box-shadow: none;
}
.article-content .v-note-wrapper .v-note-panel .v-note-show .v-show-content {
    background: #fff;
}
</style>
