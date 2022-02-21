<template>
    <section class="genre">
        <div class="section_header">
        <h3 class="section_title">Genre</h3>
        <nuxt-link to="/genre/category" class="show_more">See More</nuxt-link>
        </div>
        <div class="items">
            <div class="item" v-for="count in counter">
            <div class="thumbnail">
                <img src="images/home/item_thumbnail.jpeg" alt="">
            </div>
            <div class="texts">
                <p class="title">Jujutsu jaisen</p>
                <p>Release year: 2019</p>
                <p>Genre: Action</p>
            </div> 
            <nuxt-link to="/" class="link read_more">Read More</nuxt-link to="">
            </div>
        </div>
</section>
</template>
<script>
    export default {
      data () {
          return {
              counter: 10
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
                .item
                    flex: 0 0 calc(20% - 20px)
                    margin: 0 10px 20px
                    border-radius: 20px
                    overflow: hidden
                    font-family: 'bebas-regular'
                    background: #181515
                    .thumbnail
                        height: 100%
                        max-height: 350px
                        overflow: hidden
                        img
                            width: 100%
                            height: 100%
                            object-fit: cover
                            object-position: center
                    .texts
                        padding: 10px
                        p
                            margin: 5px 0
                    .read_more
                        padding: 0 10px 20px
</style>