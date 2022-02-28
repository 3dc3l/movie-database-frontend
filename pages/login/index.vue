<template>
    <div class="login">
        <div class="overlay">
            <div class="header">
                <h1>Sign In</h1>
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
                    <div class="primary_button outline pointer">Back To Home</div>
                    <button type="submit" class="btn pointer">Login</button>
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
                        password_confirmation: 'password'
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
                        this.$auth.loginWith('local', {
                            data: this.form
                        }).then(() => {
                            this.$router.push('/')
                        }).catch( err => {
                            console.log('Invalid credentials. Please try again.')
                        })
                    } else {

                    }

                })
            }
        },
        head () {
            return {
                title: 'Login | Movie Database'
            }
        }
    }
</script>
<style lang="stylus">
    .login
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