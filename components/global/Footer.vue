<template>
    <footer>
        <div class="footer_wrapper">
            <ul>
                <li>
                    <nuxt-link to="/">Github</nuxt-link>
                    <nuxt-link to="/">Facebook</nuxt-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
<style lang="stylus">
    footer
        .footer_wrapper
            padding: 20px
            background-color: #181515
            ul
                display: flex
                flex-flow: row wrap
                align-items: center
                justify-content: center
                a
                    display: inline-block
                    color: white
                    font-family: 'bebas-regular'
                    text-decoration: underline
</style>