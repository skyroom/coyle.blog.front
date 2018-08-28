<template>
<div class="article-view">
    <div class="article-title">
        <router-link to="/">{{ article.title }}</router-link>
    </div>
    <div class="article-short" v-text="article.short"></div>
    <div class="article-footer">
        <div class="article-footer-left">
            <img class="avator" :src="avatorSrc" />
            <router-link to="/" class="author">{{ author }}</router-link>
            <span class="time" v-text="article.createdAt"></span>
        </div>
        <div class="article-footer-right"></div>
    </div>
</div>
</template>

<script>
import config from '../config';

export default {
    props: {
        article: {
            type: Object,
        },
    },
    data() {
        return {
            author: config.author,
            avatorSrc: config.avatorSrc,
        }
    },
    computed: {},
    methods: {
        handleBack() {
            this.$router.go(-1);
        },
        getArticleListHandle(data) {
            this.getArticleList(data)
                .then((data) => {
                    this.$set(this.modifyForm, 'title', data.data[0].title);
                    this.$set(this.modifyForm, 'short', data.data[0].short);
                    this.$set(this.modifyForm, 'content', data.data[0].content);
                    this.$set(this.modifyForm, 'createdAt', data.data[0].createdAt);
                })
                .catch(() => {
                    this.$Notice.error({
                        title: err.msg || err
                    });
                });
        },
    },
    mounted() {}
}
</script>

<style>
.article-view {
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #ddd;
}

.article-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
}

.article-title a {
    text-decoration: none;
    color: rgb(41, 56, 70);
}

.article-short {
    color: rgb(41, 56, 70);
    padding: 30px 0;
}

.article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.article-footer-left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.article-footer-left .avator {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 20px;
    border: 1px solid #ddd;
}

.article-footer-left .author {
    text-decoration: none;
    color: rgb(41, 56, 70);
    margin-right: 10px;
}

.article-footer-left .time {
    color: #7f8c8d;
}
</style>
