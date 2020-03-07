<template>
    <div id="app">
        <div class="links">
            <router-link to="/apple">Первая</router-link>
            <router-link to="/pen">Вторая</router-link>
            <router-link to="/pineapple">Третья</router-link>
        </div>

        <router-view/>
    </div>
</template>

<style lang="scss">
    html {
        font-family: sans-serif;
        color: #333;
    }

    body {
        padding: 20px;
    }

    .links {
        display: flex;
        border-bottom: solid 1px #777;
        padding-bottom: 10px;

        > * {
            width: 80px;
            text-align: center;
            text-decoration: none;
            color: #777;

            &.router-link-active {
                color: #409eff;
            }
        }
    }
</style>
