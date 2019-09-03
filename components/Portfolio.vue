<template>
  <section class="portfolio section">
    <div class="container">
      <h1 class="title">Portfolio</h1>
      <PortfolioFeed :filter="routeToFilter" />
      <no-ssr>
        <transition name="slide-up-fade">
          <nuxt-child/>
        </transition>
      </no-ssr>
    </div>
  </section>
</template>


<script>
import PortfolioFeed from '~/components/PortfolioFeed.vue'

export default {
  components: {
    PortfolioFeed
  },
  computed: {
    routeToFilter() {
      let filter = {};
      filter.slug = this.$route.path.split('/').slice(-1)[0];
      if(this.$route.path.search('category') !== -1) {
        filter.type = 'tag';
      } else if(this.$route.path.search('project') !== -1) {
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
  .portfolio {
    padding-top: 150px;
  }
}

/*
  Transition for Tag Notification and Project: slide-up-fade
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
  transition: all 0.5s ease-in-out;
}

</style>
