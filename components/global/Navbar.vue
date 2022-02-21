<template>
    <div class="navbar">
        <div class="wrapper">
            <div class="desktop" v-if="!isMobile">
				<nuxt-link to="/" class="brand_logo">MOVIE DATABASE</nuxt-link>
				<ul class="nav_items">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/genre">Genre</nuxt-link></li>
                    <li><nuxt-link to="/my-favorites">My Favorites</nuxt-link></li>
				</ul>
                <div class="actions">
                    <div class="quick_search">
                        <input type="text" placeholder="Search Movie" class="input" @keyup.enter="submit"  v-model="search_query">
                        <nuxt-link to="/quick-search-result" class="search_btn" @click.native="submit()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </nuxt-link>
                    </div>
                    <div class="logged_in_out">
                        <div class="btn sign_in">Sign In</div>
                    </div>
                </div>
			</div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                search_query: '',
                isMobile: false,
            }
        },
        methods: {
            submit () {
                alert('submitted')
                // this.changeQuickSearchQuery(this.search_query)
                // this.search_query = ''
                // this.$router.push('/redirecting')
			},
        },
    }
</script>
<style lang="stylus">
    .navbar
        position: fixed
        top: 0
        left: 0
        right: 0
        width: 100%
        z-index: 7
        transition: .3s
        opacity: 1
        backdrop-filter: blur(10px)
        background-color: #0000003b
        .brand_logo
            font-family: 'bebas-bold'
            font-weight: bold
            font-size: 24px
            color: #e40a14
            letter-spacing: 5px
        .desktop
            display: flex
            justify-content: space-between
            align-items: center
            padding: 15px 50px
        .mobile
            display: flex
            align-items: center
            justify-content: space-between
            padding: 20px
            color: #e40a14
            .burger
                .line
                    width: 25px
                    height: 2px
                    display: block
                    border-radius: 2px
                    background-color: #fff
                    &.middle
                        margin: 5px 0
            .search_icon
                svg
                    width: 30px
                    height: 30px
        .nav_items
            display: flex
            align-items: center
            li
                margin: 0 16px
                padding: 5px 10px
                a
                    font-family: 'bebas-bold'
                    font-weight: bold
                    font-size: 18px
                    color: white
        .actions
            display: flex
            align-items: center
            .quick_search
                display: flex
                font-family: 'bebas-bold'
                font-size: 16px
                color: #FFFFFF
                opacity: 0.4
                border: 1px solid #FFFFFF66
                border-radius: 20px 
                padding: 0
                margin-right: 15px
                .input
                    width: 268px
                    background-color: transparent
                    color: white
                    padding: 7px 12px
                .search_btn
                    display: flex
                    align-items: center
                    justify-content: flex-end
                    padding: 7px 12px
                    border-radius: 0 21px 21px 0
                    background-color: #464747
                    height: 100%
                    cursor: pointer
            .logged_in_out
                .btn
                    &.sign_in
                        display: inline-block
                        border-radius: 4px
                        background-color: #e50914
                        padding: 7px 17px
                        font-size: 16px
                        color: white
</style>