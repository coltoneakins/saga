<template>
  <div class="blog-category__notification notification is-info has-text-centered">
    <p>You are viewing blog posts filtered by the category: <strong>{{ $route.params.tag }}</strong></p>
    <nuxt-link
      to="/blog"
      class="button is-dark is-inverted is-outlined">
      Back to Full Blog</nuxt-link>
  </div>
</template>

<script>
export default {
    transition: 'slide-up-fade',
    head () {
        let canonicalURL = process.env.baseURL + '/blog/';
        return {
            link: [
                {rel: 'canonical', href: canonicalURL}
            ]
        }
    }
}
</script>

<style>
.blog-category__notification {
    max-width: 500px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
}
.blog-category__notification .button {
    margin-top: 15px;
}
</style>
