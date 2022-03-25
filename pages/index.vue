<template>
	<div id="home">
    <HomeBanner />
    <div class="content">
      <div class="page_wrapper">
        <MovieList v-for="(genre, key) in res"  :movies="genre.movies" :genre="genre.title" :genreSlug="genre.slug" :showFavoriteButton="true" v-if="genre.movies.length > 0" />
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      components: {
          HomeBanner: () => import('~/components/home/Banner'),
          MovieList: () => import('~/components/home/MovieList.vue'),
      },
      data () {
          return {
              counter: 10,
              res: []
          }
      },
      methods: {
        getData () {
          this.$axios.get(`/api/genres`).then( res => {
            this.res = res.data
          }).catch(err => {
            console.log(err)
          })
        }
      },
      mounted () {
        this.getData()
      }
    }
</script> 
