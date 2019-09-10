<template>
  <section class="blog section">
    <div class="container">
      <h1 class="title">Blog</h1>
      <BlogFeed :filter="routeToFilter" />
      <no-ssr>
        <transition>
          <nuxt-child/>
        </transition>
      </no-ssr>
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

/*
  Transition for Tag Notification and Post: slide-up-fade
*/
.slide-up-fade-enter, .slide-up-fade-leave-to {
    opacity: 0;
}
.slide-up-fade-enter {
    transform: translateY(100px);
}
.slide-up-fade-leave-to {
    transform: translateY(100px);
}
.slide-up-fade-enter-active, .slide-up-fade-leave-active {
    transition: all 1s ease-in-out;
}
</style>
