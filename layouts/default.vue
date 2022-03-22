<template>
    <div id="default">
        <Navbar />  
        <Nuxt />
        <Footer />
        <catcher />
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'
    import Catcher from '~/components/global/Catcher'
    import AOS from 'aos'
	import 'aos/dist/aos.css'

    export default {
        components: {
            Navbar: () => import('~/components/global/Navbar'),
            Footer: () => import('~/components/global/Footer'),
            Catcher: () => import('~/components/global/Catcher'),
            // DeleteModal: () => import('~/components/global/DeleteModal'),
        },
        data () {
            return {
               
            }
        },
        computed: {
            ...mapGetters({
                is_show: 'global/modal/is_show_modal'
            })
        },
        mounted () {
            setTimeout(() => {
				AOS.init({
					duration: 1000
				})
			}, 1000)
        },
        updated () {
			setTimeout(() => {
				AOS.init({
					duration: 1000
				})
			}, 1000)
		}
    }
</script>       