<template>
    <div id="default">
        <Navbar />  
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            Navbar: () => import('~/components/global/Navbar'),
            Footer: () => import('~/components/global/Footer'),
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
        }
    }
</script>       