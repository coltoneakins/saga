<template>
  <div class="portfolio-category__notification notification is-info has-text-centered">
    <p>You are viewing portfolio projects filtered by the category: <strong>{{ $route.params.tag }}</strong></p>
    <nuxt-link
      to="/portfolio"
      class="button is-dark is-inverted is-outlined">
      Back to Full Portfolio</nuxt-link>
  </div>
</template>

<script>
export default {
  transition: 'slide-up-fade'
}
</script>

<style>
.portfolio-category__notification {
    max-width: 500px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}
.portfolio-category__notification .button {
    margin-top: 15px;
}
</style>
