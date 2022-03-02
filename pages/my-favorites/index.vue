<template>
    <div class="my_favorites">
        <Banner :bannerTitle="'MY FAVORITES'" :bannerImage="banner_image" />
        <div class="page_wrapper">
            <favorite-movies :movies="movies" />
        </div>
    </div>
</template>
<script>
    export default {
        middleware: 'auth',
        components: {
            Banner: () => import('~/components/category/Banner'),
            FavoriteMovies: () => import('~/components/my-favorites/FavoriteMovies'),
        },
        data () {
            return {
                banner_image: '/images/home/banner_large.jpeg',
                movies: []
            }
        },
        methods: {
            getData () {
                this.$axios.get(`/api/user-favorites`).then( res => {
                    this.movies = res.data
                })
            }
        },
        mounted () {
            this.getData()
        }
    }
</script>
<style lang="stylus">
    .my_favorites
        .page_wrapper
            margin-top: 30px
            color: white
</style>