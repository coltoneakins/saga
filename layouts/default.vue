<template>
  <div class="root">
    <header>
      <Nav/>
    </header>

    <main>
      <nuxt/>
    </main>

    <footer>
      <h3>Footer coming soon!</h3>
    </footer>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>


<style lang="scss">
html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    height: 0;
    min-height: 100%;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

body:before, body:after {
    content: "";
    position: fixed;
    background-color: #363636;
    left: 0;
    right: 0;
    height: 15px;
    z-index: 999;
}
body:before {
    top: 0;
}
body:after {
    bottom: 0;
}
body {
    border-left: 15px solid #363636;
    border-right: 15px solid #363636;
    padding-top: 15px;
    padding-bottom: 15px;
    height: 100%;
    background: linear-gradient(to right, skyblue, limegreen, springgreen);
    line-height: inherit;
}

.root {
  padding: 30px;
  padding-top: 130px;
}

</style>
