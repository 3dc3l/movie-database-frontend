<template>
    <div class="category">
        <Banner :bannerTitle="res.title" />
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
                res: ''
            }
        },
        asyncData({$axios, params}) {
            return $axios.get(`/api/genres/${params.category}`).then( res => {
                return {
                    res: res.data
                }
            })
        }
    }
</script> 