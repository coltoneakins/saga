<template>
  <Portfolio/>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'
export default {
    components: {
        Portfolio
    },
    scrollToTop: true,
    head () {
        return {
            title: 'Colton Eakins // Modern Web Developer // Portfolio',
            meta: [
                { hid: 'description', name: 'description', content: 'Portfolio consists of projects with HTML, CSS, JS and Python. Projects range from website spiders to interaction design.' }
            ]
        }
    },
    transition: {
        appear: true,
        name: 'fade'
    }
}
</script>
