<template>
    <div class="registration">
        <div class="overlay">
            <div class="header">
                <h1>Sign Up</h1>
            </div>
            <form class="form" id="action" @submit.prevent="submit()">
                <div class="group">
                    <label for="email">Email Address</label>
                    <input type="text" :class="[ 'input', (form.user.email.length > 0) ? 'filled' : '' ]" name="email" autofocus autocomplete="off" v-model="form.user.email" v-validate="{ required: true, email: true }">
                    <transition name="slide"><span class="validate" v-if="errors.has('email')">{{ properFormat(errors.first('email')) }}</span></transition>
                </div>
                <div class="group">
                    <label for="password">Password</label>
                    <input type="password" ref="password" :class="[ 'input', (form.user.password.length > 0) ? 'filled' : '' ]" name="password" autocomplete="off" v-model="form.user.password" v-validate="{ required: true }">
                    <transition name="slide"><span class="validate" v-if="errors.has('password')">{{ properFormat(errors.first('password')) }}</span></transition>
                </div>
                <div class="group">
                    <label for="password_confirmation">Confirm Password</label>
                    <input type="password" :class="[ 'input', (form.user.password_confirmation.length > 0) ? 'filled' : '' ]" name="password_confirmation" autocomplete="off" v-model="form.user.password_confirmation" v-validate="'required|confirmed:password|min:6'">
                    <transition name="slide"><span class="validate" v-if="errors.has('password_confirmation')">{{ properFormat(errors.first('password_confirmation')) }}</span></transition>
                </div>
                <div class="buttons">
                    <button type="submit" class="btn pointer">Register</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loaded: false,
                form: {
                    user: {
                        email: 'test@gmail.com',
                        password: 'password',
                        password_confirmation: 'password',
                        is_admin: 0
                    }
                }
            }
        },
        methods: {
            /**
             * login submission
             * calling of nuxt auth plugin
             */
            submit () {
                const me = this
                me.$validator.validateAll().then(valid => {
                    if (valid) {
                        this.$axios.post('/users', this.form)
                        .then(() => {
                            this.$auth.loginWith('local', {
                                data: this.form
                            })
                        })
                        .catch(err => {
                            me.$store.commit('global/catcher/populateErrors', { items: ['Invalid Email or password.'] })
                            // console.log(err.response.data)
                        })
                    } else {

                    }

                })
            }
        },
        head () {
            return {
                title: 'Registration | Movie Database'
            }
        }
    }
</script>
<style lang="stylus">
    .registration
        background-image: url('/images/home/banner_large.jpeg')
        height: calc(100vh - 70px)
        width: 100%
        position: relative
        .header
            font-family: 'bebas-bold'
            font-size: 24px
            color: white
            padding-bottom: 10px
        .overlay
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            padding: 40px
            background: black
            border-radius: 20px
            width: 100%
            max-width: 400px
            .form
                position: relative
                &.flex
                    flex: 1 0 auto
                .validate
                    position: absolute
                    top: calc(100% + 5px)
                    background-color: red
                    color: white
                    font-family: 'bebas-bold'
                    z-index: 1
                    padding: 5px 10px
                    border-radius: 5px
                    user-select: none
                    right: 0
                    &::before
                        content: ""
                        position: absolute
                        bottom: calc(100% - 1px)
                        width: 0
                        height: 0
                        border-left: 7px solid transparent
                        border-right: 7px solid transparent
                        border-bottom: 7px solid red
                        right: 17px
                        z-index: 1
                .group
                    padding: 10px 0
                    position: relative
                    label
                        pointer-events: none
                        font-family: 'bebas-bold'
                        font-size: 16px
                        color: white
                        margin-bottom: 10px
                        display: block
                    input
                        padding: 10px
                        border-radius: 15px
</style>