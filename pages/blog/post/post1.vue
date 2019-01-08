<template>
  <article>
    <div class="tilte">Post 1</div>
    <article class="comments">
      <vue-disqus
        :identifier="$route.name"
        :url="env.baseURL + $route.fullPath"
        shortname="coltoneakins"/>
    </article>
  </article>
</template>

<script>
export default {
  transition: 'slide-up-fade'
}
</script>
