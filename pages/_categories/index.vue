<template>
    <div class="category">
        <Banner />
        <div class="page_wrapper">
            <MovieList />
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
              counter: 10
          }
      }
    }
</script> 