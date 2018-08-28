<template>
<div class="info-view">
    <div class="avator">
        <img :src="avatorSrc" alt="">
    </div>
    <div class="blog-name" v-text="author"></div>
    <div class="words" v-text="words"></div>
</div>
</template>

<script>
import config from '../config';

export default {
    data() {
        return {
            author: config.author,
            words: config.words,
            avatorSrc: config.avatorSrc,
        }
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style>
.info-view {
    padding-top: 20px;
    padding-bottom: 20px;
}
.avator {
    text-align: center;
}
.avator img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid #ddd;
    vertical-align: middle;
}
.blog-name {
    color: rgb(41, 56, 70);
    text-align: center;
    margin-top: 30px;
    font-size: 32px;
    font-weight: bold;
}
.words {
    color: #a1b2b4;
    text-align: center;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
}
</style>
