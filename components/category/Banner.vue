<template>
    <div class="banner">
        <img :src="bannerImage" alt="" class="banner_image">
        <div class="main_texts">
            <h1 class="title">{{ bannerTitle  }}</h1> 
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            bannerTitle: {
                type: String,
                default: null
            },
            bannerImage: {
                type: String,
                default: null
            }
        },
        data () {
            return {
                
            }
        }
    }
</script>   
<style lang="stylus" scoped>
    .banner
        position: relative
        width: 100%
        height: 300px
        background-color: #000
        .banner_image
            width: 100%
            height: 100%
            opacity: 0.3
            object-fit: cover
            object-position: center
        .main_texts
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            text-align: center
            color: white
            .title
                font-family: 'bebas-bold'
                font-size: 60px
                padding-bottom: 20px
                letter-spacing: 5px
            .label
                font-family: 'bebas-regular'
                font-size: 28px
                letter-spacing: 3px
</style>