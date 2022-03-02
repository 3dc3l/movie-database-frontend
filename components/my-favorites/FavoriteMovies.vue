<template>
    <section class="genre">
        <div class="section_header" v-if="isHeaderShow">
            <h3 class="section_title">{{ genre }}</h3>
            <nuxt-link :to="genre" class="show_more">See More</nuxt-link>
        </div>
        <div class="items">
            <div class="item" v-for="(movie, key) in movies" :key="key">
                <div class="thumbnail">
                    <img :src="movie.get_image_url" alt="">
                </div>
                <div class="texts">
                    <p class="title">{{ movie.title }}</p>
                    <p>Release year: {{ movie.release_year }}</p>
                    <p>Genre: <span v-for="genre in movie.genres">{{genre.title}}</span><span v-if="movie.genres.length > 1">, </span></p>
                    <div class="btn remove" @click="removeFromList(movie)">Remove</div>
                </div> 
            </div>
        </div>
    </section>
</template>
<script>
    export default {
      props: {
          movies: {
              type: Array,
              default: null
          }
      },
      data () {
          return {
            counter: 10,
            res: '',
            isHeaderShow: false,
          }
      },
      methods: {
          removeFromList (movie) {
              this.$axios.post(`/api/add-remove-favorite`, {
                user_id: this.$auth.user.id,
                movie_id: movie.id
            }).then( res => {
                //
                this.$parent.getData()
            }).catch( err => {
                console.log(err)
            })
          }
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
                color: white
                .item
                    flex: 0 0 calc(20% - 20px)
                    margin: 0 10px 20px
                    border-radius: 20px
                    overflow: hidden
                    font-family: 'bebas-regular'
                    background: #181515
                    position: relative
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