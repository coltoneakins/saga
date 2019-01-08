<template>
  <article>
    <div class="tilte">Post 1</div>
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
          baseURL: process.env.baseURL
      }
  },
  transition: 'slide-up-fade'
}
</script>
