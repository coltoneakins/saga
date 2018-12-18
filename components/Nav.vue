<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation">
    <div class="container">

      <div class="navbar-brand">
        <nuxt-link
          to="/">
          <img
            src="~assets/logo.png"
            width="100">
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="main-menu">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div
        id="main-menu"
        class="navbar-menu">
        <ul class="navbar-end">
          <li>
            <nuxt-link
              class="navbar-item is-size-5"
              to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="navbar-item is-size-5"
              to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="navbar-item is-size-5"
              to="/blog">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="navbar-item is-size-5"
              to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>


  </nav>
</template>


<style>
.navbar-brand img {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
}
.navbar-burger span {
    height: 2px;
}
.navbar-menu ul {
    align-items: center;
}
.navbar-item {
    margin-left: 20px;
    margin-right: 20px;
}
.navbar {
    position: fixed !important;
    top: 30px;
    left: 0;
    right: 0;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 90%;
    background-color: #ababab;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
