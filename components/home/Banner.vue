<template>
    <div class="banner">
        <img src="images/home/banner_large.jpeg" alt="" class="banner_image">
        <div class="main_texts" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
            <h1 class="title">Unlimited Pirated Movies.</h1>
            <p class="label">Watch anywhere. Police everywhere.</p>
        </div>
    </div>
</template>
<script>
    export default {
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
        height: 100vh
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