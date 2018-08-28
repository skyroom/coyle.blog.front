<template>
<div class="blog-header">
    <ul class="menu">
        <li>
            <router-link to="/">首页</router-link>
        </li>
        <li>
            <router-link to="/">归档</router-link>
        </li>
        <li>
            <router-link to="/">关于</router-link>
        </li>
    </ul>
</div>
</template>

<style>
.menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    padding-right: 40px;
}
.menu li {
    margin-right: 20px;
}
.menu li  a {
    text-decoration: none;
    color: #a1b2b4;
    font-size: 18px;
    font-weight: bold;
}
</style>
