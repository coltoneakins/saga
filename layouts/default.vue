<template>
  <div
    class="root">

    <div
      id="menu"
      class="mobile-menu">
      <aside class="menu">
        <ul class="menu-list">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </aside>
    </div>

    <a
      role="button"
      class="navbar-burger toggle-button"
      data-target="navMenu"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
      <span aria-hidden="true"/>
    </a>

    <div id="panel">
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

  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Slideout from 'slideout'

export default {
    components: {
        Nav
    },
    mounted: function () {
        var slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70,
            'easing': 'ease-in-out',
            'side': 'right'
        });

        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function() {
      slideout.toggle();
      });
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


/*
BEGIN: Slideout CSS Styles
*/

.slideout-menu {
    position: fixed;
    top: 15px;
    bottom: 0;
    right: 15px;
    width: 256px;
    min-height: 100vh;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
}

.slideout-menu-left {
    left: 15px;
}

.slideout-menu-right {
    right: 15px;
}

.slideout-panel {
    position: relative;
    z-index: 1;
    will-change: transform;
    /*background-color: #FFF; /* A background-color is required */
    min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
    overflow: hidden;
}

.slideout-open .slideout-menu {
    display: block;
}
/*
END: Slideout CSS Styles
*/


#panel {
    padding: 30px;
    padding-top: 130px;
    background-color: #F5F5F5;
}

.navbar-burger {
    position: fixed;
    z-index: 5;
    right: 15px;
    color: #363636;
    background-color: #ABABAB;
    background-color: rgba(0, 0, 0, 0.075);
}

@media screen and (min-width: 775px) {
    .navbar-burger {
        display: none;
    }
}

.mobile-menu {
    background-color: #E4E4E4;
}

.mobile-menu .menu-list a {
    padding: 15px;
    padding-top: 25px;
    padding-bottom: 25px;
}

.mobile-menu .menu-list .nuxt-link-exact-active {
    background-color: #B1CCCC;
}

</style>
