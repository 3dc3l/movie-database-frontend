<template>
    <div class="category">
        <Banner :bannerTitle="res.title" :bannerImage="banner_image" />
        <div class="page_wrapper">
            <MovieList :movies="res.movies" :genre="res.title" :genreSlug="res.slug" :isHeaderShow="false" />
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            Banner: () => import('~/components/category/Banner'),
            MovieList: () => import('~/components/home/MovieList.vue'),
        },
        data () {
            return {
                counter: 10,
                res: [],
                banner_image: '/images/home/banner_large.jpeg'
            }
        },
        asyncData({$axios, params}) {
            return $axios.get(`/api/genres/${params.category}`).then( res => {
                return {
                    res: res.data
                }
            })
        },
        methods: {
            getData () {
                this.$axios.get(`/api/genres/${this.$route.params.category}`).then( res => {
                    this.res = res.data
                }).catch(err => {
                    console.log(err)
                })
            }
        },
    }
</script> 