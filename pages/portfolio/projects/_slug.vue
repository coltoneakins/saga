<template>
  <article v-if="project">
    <h1 class="title">{{ project.title }}</h1>
    <div v-html="project.body"/>
  </article>
</template>

<script>
  export default {
    data: function() {
      return {
        baseURL: process.env.baseURL,
      }
    },
    created: function() {
        return this.project = require('~/static/projects/' + this.$route.params.slug + '.json');
    },
    transition: 'slide-up-fade',
    scrollToTop: false
}
</script>
