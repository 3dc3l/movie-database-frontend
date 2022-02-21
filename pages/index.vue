<template>
	<div id="home">
    <HomeBanner />
    <div class="content">
      <div class="page_wrapper">
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
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
              counter: 10
          }
      }
    }
</script> 
