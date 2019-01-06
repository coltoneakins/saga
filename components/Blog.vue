<template>
  <section class="blog section">
    <div class="container">
      <h1 class="title">Blog</h1>
      <BlogFeed/>
      <nuxt-child/>
    </div>
  </section>
</template>


<script>
import BlogFeed from '~/components/BlogFeed.vue'

export default {
  components: {
    BlogFeed
  }
}
</script>


<style>
@media screen and (min-width: 767px) {
  .blog {
    padding-top: 150px;
  }
}

</style>
