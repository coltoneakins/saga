<template>
  <section class="blog section">
    <div class="container">
      <h1 class="title">Blog</h1>
      <BlogFeed
        :filter="routeToFilter" />
      <nuxt-child/>
    </div>
  </section>
</template>


<script>
import BlogFeed from '~/components/BlogFeed.vue'

export default {
  components: {
    BlogFeed
  },
  computed: {
    routeToFilter() {
      let filter = {};
      filter.slug = this.$route.path.split('/').slice(-1)[0];
      if(this.$route.path.search('category') !== -1) {
        filter.type = 'tag';
      } else if(this.$route.path.search('post') !== -1) {
        filter.type = 'post';
      } else {
        filter.type = 'no-filter';
      }
      return filter;
    }
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
