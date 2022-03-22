<template>
    <section class="genre">
        <div class="section_header" v-if="isHeaderShow">
            <h3 class="section_title">{{ genre }}</h3>
            <nuxt-link :to="genre" class="show_more" v-if="modifiedMovies.length > 10">See More</nuxt-link>
        </div>
        <div class="items">
            <template v-if="hasLimit">
                <div class="item" v-for="(movie, index) in modifiedMovies" v-if="index < 10" data-aos="fade-up" :data-aos-delay="`${100 * index}`" data-aos-once="true">
                    <div v-if="$auth.loggedIn" @click="AddRemoveFavorite(movie)">
                        <svg :fill="`${ movie.is_favorite ? 'gold' : 'black' }`" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 13 2 C 12.447 2 12 2.448 12 3 L 12 47 C 12 47.358 12.190953 47.689187 12.501953 47.867188 C 12.812953 48.045187 13.194906 48.043281 13.503906 47.863281 L 25 41.158203 L 36.496094 47.863281 C 36.651094 47.954281 36.826 48 37 48 C 37.172 48 37.344047 47.956187 37.498047 47.867188 C 37.809047 47.689188 38 47.358 38 47 L 38 33.167969 L 36 34.447266 L 36 45.259766 L 25.503906 39.136719 C 25.348906 39.045719 25.174 39 25 39 C 24.826 39 24.651094 39.045719 24.496094 39.136719 L 14 45.259766 L 14 4 L 36 4 L 36 13.205078 L 36.345703 12.298828 L 36.648438 11.996094 C 36.868437 11.776094 37.348953 11.365187 38.001953 11.117188 L 38.001953 3 C 38.001953 2.448 37.554953 2 37.001953 2 L 13 2 z M 39.0625 12.910156 C 38.6625 12.910156 38.2625 13.210156 38.0625 13.410156 L 35.662109 19.710938 L 28.962891 20.111328 C 28.562891 20.111328 28.1625 20.410547 28.0625 20.810547 C 27.9625 21.210547 28.062891 21.710156 28.462891 21.910156 L 33.5625 26.111328 L 31.861328 32.611328 C 31.761328 33.011328 31.961719 33.510937 32.261719 33.710938 C 32.461719 33.810938 32.661328 33.910156 32.861328 33.910156 C 33.062328 33.910156 33.263891 33.810938 33.462891 33.710938 L 39.0625 30.111328 L 44.662109 33.810547 C 44.962109 34.110547 45.461719 34.010547 45.761719 33.810547 C 46.161719 33.510547 46.262109 33.110937 46.162109 32.710938 L 44.462891 26.210938 L 49.662109 22.011719 C 49.962109 21.711719 50.062891 21.310156 49.962891 20.910156 C 49.862891 20.510156 49.4625 20.210938 49.0625 20.210938 L 42.361328 19.810547 L 39.962891 13.511719 C 39.862891 13.211719 39.4625 12.910156 39.0625 12.910156 z M 39.0625 16.710938 L 40.662109 21.210938 C 40.862109 21.510937 41.1625 21.810547 41.5625 21.810547 L 46.363281 22.111328 L 42.662109 25.111328 C 42.362109 25.311328 42.263281 25.711328 42.363281 26.111328 L 43.5625 30.710938 L 39.5625 28.111328 C 39.4625 28.011328 39.2625 27.910156 39.0625 27.910156 C 38.8615 27.910156 38.662891 28.011719 38.462891 28.011719 L 34.462891 30.611328 L 35.662109 26.011719 C 35.762109 25.711719 35.663281 25.211719 35.363281 25.011719 L 31.662109 22.011719 L 36.462891 21.810547 C 36.862891 21.710547 37.163281 21.511328 37.363281 21.111328 L 39.0625 16.710938 z" /></svg>
                    </div>
                    <div class="thumbnail">
                        <img :src="movie.get_image_url" alt="">
                        <div class="overlay">
                            <nuxt-link :to="`${genreSlug}/${movie.slug}`" class="link read_more">Read More</nuxt-link to="">
                        </div>
                    </div>
                    <div class="texts">
                        <p class="title">{{ movie.title }}</p>
                        <p>Release year: {{ movie.release_year }}</p>
                        <p>Genre: {{ genre }}</p>
                    </div> 
                    <nuxt-link :to="`${genreSlug}/${movie.slug}`" class="link read_more">Read More</nuxt-link to="">
                </div>
            </template>
            <template v-else>
                <div class="item" v-for="(movie, index) in modifiedMovies" data-aos="fade-up" :data-aos-delay="`${100 * index}`" data-aos-once="true">
                    <div v-if="$auth.loggedIn" @click="AddRemoveFavorite(movie)">
                        <svg :fill="`${ movie.is_favorite ? 'gold' : 'black' }`" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M 13 2 C 12.447 2 12 2.448 12 3 L 12 47 C 12 47.358 12.190953 47.689187 12.501953 47.867188 C 12.812953 48.045187 13.194906 48.043281 13.503906 47.863281 L 25 41.158203 L 36.496094 47.863281 C 36.651094 47.954281 36.826 48 37 48 C 37.172 48 37.344047 47.956187 37.498047 47.867188 C 37.809047 47.689188 38 47.358 38 47 L 38 33.167969 L 36 34.447266 L 36 45.259766 L 25.503906 39.136719 C 25.348906 39.045719 25.174 39 25 39 C 24.826 39 24.651094 39.045719 24.496094 39.136719 L 14 45.259766 L 14 4 L 36 4 L 36 13.205078 L 36.345703 12.298828 L 36.648438 11.996094 C 36.868437 11.776094 37.348953 11.365187 38.001953 11.117188 L 38.001953 3 C 38.001953 2.448 37.554953 2 37.001953 2 L 13 2 z M 39.0625 12.910156 C 38.6625 12.910156 38.2625 13.210156 38.0625 13.410156 L 35.662109 19.710938 L 28.962891 20.111328 C 28.562891 20.111328 28.1625 20.410547 28.0625 20.810547 C 27.9625 21.210547 28.062891 21.710156 28.462891 21.910156 L 33.5625 26.111328 L 31.861328 32.611328 C 31.761328 33.011328 31.961719 33.510937 32.261719 33.710938 C 32.461719 33.810938 32.661328 33.910156 32.861328 33.910156 C 33.062328 33.910156 33.263891 33.810938 33.462891 33.710938 L 39.0625 30.111328 L 44.662109 33.810547 C 44.962109 34.110547 45.461719 34.010547 45.761719 33.810547 C 46.161719 33.510547 46.262109 33.110937 46.162109 32.710938 L 44.462891 26.210938 L 49.662109 22.011719 C 49.962109 21.711719 50.062891 21.310156 49.962891 20.910156 C 49.862891 20.510156 49.4625 20.210938 49.0625 20.210938 L 42.361328 19.810547 L 39.962891 13.511719 C 39.862891 13.211719 39.4625 12.910156 39.0625 12.910156 z M 39.0625 16.710938 L 40.662109 21.210938 C 40.862109 21.510937 41.1625 21.810547 41.5625 21.810547 L 46.363281 22.111328 L 42.662109 25.111328 C 42.362109 25.311328 42.263281 25.711328 42.363281 26.111328 L 43.5625 30.710938 L 39.5625 28.111328 C 39.4625 28.011328 39.2625 27.910156 39.0625 27.910156 C 38.8615 27.910156 38.662891 28.011719 38.462891 28.011719 L 34.462891 30.611328 L 35.662109 26.011719 C 35.762109 25.711719 35.663281 25.211719 35.363281 25.011719 L 31.662109 22.011719 L 36.462891 21.810547 C 36.862891 21.710547 37.163281 21.511328 37.363281 21.111328 L 39.0625 16.710938 z" /></svg>
                    </div>
                    <div class="thumbnail">
                        <img :src="movie.get_image_url" alt="">
                        <div class="overlay">
                            <nuxt-link :to="`${genreSlug}/${movie.slug}`" class="link read_more">Read More</nuxt-link to="">
                        </div>
                    </div>
                    <div class="texts">
                        <p class="title">{{ movie.title }}</p>
                        <p>Release year: {{ movie.release_year }}</p>
                        <p>Genre: {{ genre }}</p>
                    </div> 
                    <nuxt-link :to="`${genreSlug}/${movie.slug}`" class="link read_more">Read More</nuxt-link to="">
                </div>
            </template>
        </div>
</section>
</template>
<script>
    export default {
      props: {
          movies: {
              type: Array,
              default: null
          },
          genre: {
              type: String,
              default: null
          },
          isHeaderShow: {
              type: Boolean,
              default: true
          },
          genreSlug: {
              type: String,
              default: null
          },
          hasLimit: {
              type: Boolean,
              default: true
          }
      },  
      data () {
          return {
            counter: 10,
            res: '',
          }
      },
      computed: {
          modifiedMovies () {
            let updated_movies = []
            if (this.$auth.loggedIn) {
                this.movies.forEach((movie, key) => {
                   if(movie.users.length > 0) {
                        movie.users.forEach((user, key) => {
                            if (this.$auth.user.id == user.id) {
                                movie.is_favorite = true
                            }
                        })
                   }

                    updated_movies.push(movie)
                })

                return updated_movies
            } else {
                return this.movies
            }
            
          }
      },
      methods: {
        AddRemoveFavorite (movie) {
            this.$axios.post(`/api/add-remove-favorite`, {
                user_id: this.$auth.user.id,
                movie_id: movie.id
            }).then( res => {
                //
                this.$parent.getData()
            }).catch( err => {
                console.log(err)
            })
        },
        getMoviesWithFavorites () {
            
        }
      },
      mounted () {
          this.getMoviesWithFavorites()
      }
    }
</script> 
<style lang="stylus">
    section
        padding: 30px 0
        .section_header
            display: flex
            justify-content: space-between
            align-items: center
            font-family: 'bebas-bold'
            margin-bottom: 30px
            .section_title
                font-size: 34px
            .show_more
                font-size: 22px
                color: #e40a14
                letter-spacing: 2px
                text-decoration: underline
        &.genre
            display: flex
            flex-flow: column wrap
            color: white
            .items
                display: flex
                flex-flow: row wrap
                align-items: flex-start
                .item
                    flex: 0 0 calc(20% - 20px)
                    margin: 0 10px 20px
                    border-radius: 20px
                    overflow: hidden
                    font-family: 'bebas-regular'
                    background: #181515
                    position: relative
                    transition: 0.5s
                    svg
                        position: absolute
                        top: 10px
                        right: 10px
                        cursor: pointer
                        transition: .3s
                        transform: scale(.8)
                        &:hover
                            transform: scale(1)
                            transition: .3s
                    .thumbnail
                        height: 100%
                        overflow: hidden
                        position: relative
                        .overlay
                            position: absolute
                            top: 0
                            bottom: 0
                            left: 0
                            right: 0
                            width: 100%
                            height: 100%
                            background-color: #000000ad
                            display: flex
                            align-items: flex-end
                            justify-content: center
                            transition: 0.5s
                            opacity: 0
                            .read_more
                                text-decoration: none
                                color: white
                                padding: 10px
                                border-radius: 5px
                                background-color: #c41414
                                margin-bottom: 20px
                        &:hover
                            .overlay
                                opacity: 1
                        img
                            width: 100%
                            height: 300px
                            object-fit: cover
                            object-position: center
                    .texts
                        padding: 10px
                        p
                            margin: 5px 0
                    .read_more
                        padding: 0 10px 20px
</style>