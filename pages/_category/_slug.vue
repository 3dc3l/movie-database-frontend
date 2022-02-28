<template>
    <div class="inner_page">
        <Banner :bannerTitle="res.title" :bannerImage="res.get_image_url" />
        <div class="page_wrapper">
            <section class="casts">
                <div class="section_header">
                    <h3 class="section_title">Casts</h3>
                </div>
                <div class="section_content">
                    <template v-for="(cast, key) in res.casts">
                        <div class="cast" :key="key">
                            <img :src="cast.get_image_url" alt="">
                            <div class="name">Real Name: {{ cast.full_name }}</div>
                            <div class="stage_name">Stage Name: {{ cast.stage_name }}</div>
                        </div>
                    </template>
                </div>
            </section>
            <section class="reviews">
                 <div class="section_header">
                    <h3 class="section_title">Reviews</h3>
                </div>
                <div class="section_content">
                    <div class="create_reviews" v-if="$auth.loggedIn">
                        <form class="form" id="action" @submit.prevent="createReview()">
                            <div class="group">
                                <label for="review">Create Review</label>
                                <textarea rows="4" type="text" :class="[ 'input', (created_review.content.length > 0) ? 'filled' : '' ]" name="review" autofocus autocomplete="off" v-model="created_review.content" v-validate="{ required: true}"></textarea>
                                <transition name="slide"><span class="validate" v-if="errors.has('review')">{{ properFormat(errors.first('review')) }}</span></transition>
                            </div>
                            <div class="buttons">
                                <button type="submit" class="btn pointer">Submit</button>
                                <div class="btn pointer cancel">Cancel</div>
                            </div>
                        </form>
                    </div>
                    <div class="review_items">
                        <div class="item" v-for="(review, key) in reviews" :key="key">
                            <template v-if="!review.is_edit">
                                <div class="content">
                                    <p class="name">{{ review.user.email }}</p>
                                    <p class="review_body">{{ review.content }}</p>
                                    <p class="review_body">{{ review.is_edit }}</p>
                                </div>
                                <template v-if="review.user.email == $auth.user.email">
                                    <div class="action">
                                        <div class="btn pointer edit" @click="edit(review)">Edit</div>
                                        <div class="btn pointer delete">Delete</div>
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                                <div>
                                    <form class="form update" id="action" @submit.prevent="updateReview(review)">
                                        <div class="group">
                                            <label for="review">Update Review</label>
                                            <textarea rows="4" type="text" :class="[ 'input', (review.content.length > 0) ? 'filled' : '' ]" name="review" autofocus autocomplete="off" v-model="review.content" v-validate="{ required: true}"></textarea>
                                            <transition name="slide"><span class="validate" v-if="errors.has('review')">{{ properFormat(errors.first('review')) }}</span></transition>
                                        </div>
                                        <div class="buttons">
                                            <button type="submit" class="btn pointer">Update</button>
                                            <div class="btn pointer cancel">Cancel</div>
                                        </div>
                                    </form>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            Banner: () => import('~/components/category/Banner'),
        },
        data () {
            return {
                counter: 10,
                res: '',
                created_review: {
                    content: 'fdfdff',
                    user_id: this.$auth.user.id,
                    movie_id: '',
                    rating: 1
                },
                reviews: ''
            }
        },
        asyncData({$axios, params}) {
            return $axios.get(`/api/movies/${params.slug}`).then( res => {
                return {
                    res: res.data
                }
            })
        },
        methods: {
            createReview () {
                this.created_review.movie_id = this.res.id
                this.$validator.validateAll().then(valid => {
                    if (valid) {
                        this.$axios.post('/api/reviews', this.created_review).then(() => {
                            alert('success')
                            this.getReviewData()
                        }).catch( err => {
                            alert('err')
                        })
                    } else {
                        alert('not valid')
                    }
                })
            },
            edit (selected_review) {
                this.getReviewData(selected_review)
            },
            updateReview (updated_review) {
                this.$validator.validateAll().then(valid => {
                    if (valid) {
                        this.$axios.put(`/api/reviews/${updated_review.id}`, updated_review).then(() => {
                            alert('success')
                            this.getReviewData()
                        }).catch( err => {
                            alert('err')
                        })
                    } else {
                        alert('not valid')
                    }
                })
            },
            getReviewData (selected_review = null) {
                this.$axios.get(`/api/reviews`).then( res => {
                    this.reviews = res.data
                    res.data.forEach( (item) => {
                        if (selected_review !== null && selected_review.id == item.id) {
                            item.is_edit = true
                        } else {
                            item.is_edit = false
                        }
                    })
                })
            }
        },
        mounted () {
            this.getReviewData()
        }
    }
</script> 
<style lang="stylus">
   .inner_page
        section
            .section_header
                display: flex
                justify-content: space-between
                align-items: center
                font-family: 'bebas-bold'
                margin-bottom: 30px
                h3
                    color: white
                    font-size: 34px
            .section_content
                display: flex;
                flex-flow: row wrap;
                .cast
                    width: 100%
                    flex: 0 0 calc(20% - 20px)
                    margin: 0 10px 20px
                    overflow: hidden
                    img
                        width: 80px
                        height: 80px
                        border-radius: 50%
                        overflow: hidden
                        object-fit: cover
                        object-position: top 
                    .name,
                    .stage_name
                        font-family: 'bebas-bold'
                        font-size: 16px
                        color: white
                    .name
                        padding: 10px 0
            &.reviews
                .section_content
                    display: flex
                    flex-flow: column wrap
                    .create_reviews
                        padding: 10px
                        margin-bottom: 30px
                        textarea
                            background-color: white
                            border-radius: 5px
                            padding: 10px
                    .review_items
                        display: flex
                        flex-flow: column wrap
                        .item
                            font-family: 'bebas-regular'
                            font-size: 14px
                            color: white
                            padding: 20px
                            background-color: #464747
                            border-radius: 25px
                            margin-bottom: 15px
                            .name 
                                font-size: 20px
                            .review_body
                                padding: 10px 0
</style>