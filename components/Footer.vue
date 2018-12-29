<template>
  <div class="footer footer-bar">
    <div class="content has-text-centered">
      <img
        alt="Colton Eakins logo of initials"
        src="~/assets/logo-loop-white.png">
      <div class="footer-bar__social-media-wrapper">
        <div class="level">
          <div class="level-item has-text-centered">
            <a href="https://github.com/coltoneakins">GitHub</a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://stackoverflow.com/users/9347694/coltoneakins">Stack Overflow</a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://www.linkedin.com/in/coltoneakins/">LinkedIn</a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://codepen.io/coltoneakins">CodePen</a>
          </div>
          <div class="level-item has-text-centered">
            <a href="https://repl.it/@coltoneakins">Repl.it</a>
          </div>
        </div>
      </div>
      <p>© 2018 Colton Eakins - <nuxt-link to="/contact">Contact</nuxt-link></p>
    </div>
  </div>
</template>

<style>
.footer-bar {
    background-color: #363636;
    background-color: rgba(54, 54, 54, 0.85);
    padding: 15px;
    color: #fff;
}
.footer-bar img {
    width: 50px;
}
.footer-bar__social-media-wrapper .level-item a {
    color: #F5F5F5;
}
.footer-bar__social-media-wrapper {
    max-width: 600px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
