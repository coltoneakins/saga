<template>
  <article>
    <h1 class="title">{{ post.title }}</h1>
    <div v-html="post.body"/>
    <article class="comments">
      <vue-disqus
        :identifier="$route.name"
        :url="baseURL + $route.fullPath"
        shortname="coltoneakins"/>
    </article>
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
        return this.post = require('~/static/posts/' + this.$route.params.slug + '.json');
    },
    transition: 'slide-up-fade'
}
</script>
