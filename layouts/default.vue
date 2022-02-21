<template>
    <div id="default">
        <Navbar />  
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
    export default {
        components: {
            Navbar: () => import('~/components/global/Navbar'),
            Footer: () => import('~/components/global/Footer'),
        },
        data () {
            return {
               
            }
        }
    }
</script>       