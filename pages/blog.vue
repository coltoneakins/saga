<template>
  <Blog/>
</template>

<script>
import Blog from '~/components/Blog.vue'

export default {
    components: {
        Blog
    },
    scrollToTop: true,
    head () {
        return {
            title: 'Colton Eakins // Modern Front-End Developer // Blog',
            meta: [
                { hid: 'description', name: 'description', content: 'Colton writes blog posts that dive deep into web development.' }
            ]
        }
    },
    transition: {
        appear: true,
        name: 'fade'
    }

}
</script>
