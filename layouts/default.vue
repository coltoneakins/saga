<template>
  <div
    class="root">

    <div
      id="menu"
      class="mobile-menu">
      <aside class="menu">
        <ul class="menu-list">
          <li><nuxt-link
            class="mobile-menu__item"
            to="/">Home</nuxt-link></li>
          <li><nuxt-link
            class="mobile-menu__item"
            to="/portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link
            class="mobile-menu__item"
            to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link
            class="mobile-menu__item"
            to="/contact">Contact</nuxt-link></li>
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
        <SocialMedia/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>

  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import SocialMedia from '~/components/SocialMedia.vue'
import Footer from '~/components/Footer.vue'
import Slideout from 'slideout'

export default {
    components: {
      Nav,
      SocialMedia,
      Footer
    },
    mounted: function () {
      this.$nextTick(function(){
           // Initialize slideout.js to set up the mobile site menu
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

            // Attach an event listener to all mobile menu buttons so that the menu is closed
            // on page change. This is a SPA--so there is no hard refresh.
            if (document.querySelector('.mobile-menu') !== null) {
                var mobileButtons = document.querySelectorAll('.mobile-menu__item');
                for (var i=0; i<mobileButtons.length; i++){
                    mobileButtons[i].addEventListener('click', function(){
                        slideout.close();
                    });
                }
            }

        })
    }
}
</script>


<style>
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
    /*will-change: transform; Opted not to establish a new stacking context.*/
    /*Establishing a new stacking context 'breaks' the fixed position menu and social media icons.*/
    /*Performance will take a hit.*/
    /*background-color: #FFF; A background-color is required. */
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
    /*padding: 30px;*/
    /*padding-top: 130px;*/
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

/*
Transition Between Routes: Slide
TODO: Make animations more performant.
*/

/*.slide-enter-active {*/
    /*animation: slideLeftIn 0.45s ease-out both;*/
/*}*/
/**/
/*.slide-leave-active {*/
    /*animation: slideLeftOut 0.45s ease-in both;*/
/*}*/
/**/
/*@keyframes slideLeftIn {*/
    /*0% {*/
        /*transform: translateX(100%);*/
    /*}*/
    /*100% {*/
        /*transform: translateX(0);*/
    /*}*/
/*}*/
/**/
/*@keyframes slideLeftOut {*/
    /*0% {*/
        /*transform: translateX(0);*/
    /*}*/
    /*100% {*/
        /*transform: translateX(-100%);*/
  /*}*/
/*}*/

/*
Transition Between Routes: Fade
*/

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in;
}


</style>
