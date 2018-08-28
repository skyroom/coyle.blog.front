<template>
<div class="">
    <info-view />
    <div class="font-awesome-con">
        <a href="https://github.com/skyroom" target="_blank" class="fa fa-lg fa-github" aria-hidden="true"></a>
        <a href="https://weibo.com/u/2720114643" target="_blank" class="fa fa-lg fa-weibo" aria-hidden="true"></a>
        <a href="https://twitter.com/skyroomtui" target="_blank" class="fa fa-lg fa-twitter" aria-hidden="true"></a>
        <a href="https://stackoverflow.com/story/coyle" target="_blank" class="fa fa-lg fa-stack-overflow" aria-hidden="true"></a>
    </div>
</div>
</template>

<script>
import InfoView from '~/components/InfoView.vue'
import ArticleView from '~/components/ArticleView.vue'
import {
    mapMutations,
    mapActions
} from 'vuex';
import 'font-awesome/css/font-awesome.min.css';

export default {
    data() {
        return {
            searchKey: '',
        }
    },
    fetch ({ store, params }) {
        return store.dispatch('articles/getArticlesViewList')
                    .then((res) => {
                        // store.commit('setStars', res.data);
                        // console.log('前台获取结果为', res);
                    })
                    .catch(() => {
                    });
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
.font-awesome-con {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.font-awesome-con a {
    text-decoration: none;
}
.font-awesome-con .fa {
    font-size: 23px;
    width: 40px;
    height: 40px;
    border-radius: 22px;
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
    padding: 5px;
}
.font-awesome-con .fa + .fa {
    margin-left: 15px;
}
.font-awesome-con .fa:before {
    position: relative;
    top: 6px;
    left: 4px;
}
</style>
