<template>
  <nav
    class="navi-fixed navigation"
    role="navigation"
    aria-label="main navigation">

    <div class="container navigation__primary">
      <div class="tile is-ancestor navi-tile-ancestor">
        <div class="tile is-parent is-2">
          <div class="tile is-child">
            <nuxt-link
              title="Colton Eakins"
              class="navigation__logo-primary"
              to="/">
              <svg
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:ev="http://www.w3.org/2001/xml-events"
                class="home-button"
                viewBox="0 0 300 150">

                <defs>
                  <mask id="home-button__mask">


                    <rect
                      width="500px"
                      height="300px"
                      fill="#fff" />




                    <path
                      d="m95.18 15.103c-14.197 0.0194-27.903 5.3468-38.534 14.859-12.9 11.541-19.965 27.997-19.965 45.039 7e-5 17.042 7.0653 33.497 19.965 45.038 12.961 11.596 30.489 16.976 47.906 14.095h2e-3c3.9073-0.64624 7.6236-1.6678 11.15-2.9873v-0.0427c10.5-3.965 19.311-10.558 26.461-17.763 9.4098-9.4828 16.016-19.876 22.024-29.146 3.9743-6.1331 7.7373-11.833 11.61-16.782 1.9605-2.5583 3.9498-4.9268 6.0038-6.9995h2e-3c5.9976-6.0519 12.941-10.156 19.162-11.185 1.6522-0.27307 3.3937-0.32978 5.1585-0.18723 5.2944 0.4274 10.792 2.64 14.684 6.1216 3.7419 3.3479 6.5665 8.2882 7.8811 13.498h-34.376v12.68h68.678c0.21714-2.0986 0.32745-4.2145 0.32745-6.3396 0-17.042-7.063-33.497-19.963-45.039-12.96-11.596-30.491-16.976-47.908-14.095-5.1251 0.84776-9.9197 2.3443-14.39 4.3093v0.0513c-9.0851 4.0227-16.821 9.9793-23.222 16.43-9.4098 9.4827-16.017 19.878-22.024 29.148-3.9748 6.1339-7.7379 11.833-11.611 16.784-1.9604 2.5573-3.9498 4.9255-6.0033 6.9977-5.9976 6.0519-12.941 10.155-19.162 11.184-6.6088 1.093-14.656-1.2925-19.844-5.9346-5.2495-4.6967-8.6968-12.526-8.6968-19.838-4e-5 -7.3113 3.4473-15.142 8.6968-19.838 3.8913-3.4816 9.3914-5.6943 14.686-6.1217 1.7648-0.14256 3.5063-0.0862 5.1585 0.18722 6.2207 1.0289 13.164 5.133 19.162 11.185 1.1767 1.1874 2.332 2.4726 3.4733 3.8333 1.1348-1.7045 2.2984-3.4822 3.4992-5.3353 4.5003-6.9446 9.5658-14.962 16.291-23.051-9.4531-9.3263-21.741-17.484-36.906-19.992h-2e-3c-2.1771-0.36008-4.3555-0.59077-6.5271-0.69674-0.95007-0.047-1.8984-0.0691-2.8448-0.068zm83.151 70.653c-1.1356 1.7044-2.2981 3.4783-3.5003 5.3334-4.5004 6.9449-9.5659 14.962-16.291 23.051 9.4534 9.3267 21.743 17.484 36.909 19.993 17.418 2.8809 34.948-2.4987 47.909-14.095 7.9748-7.1351 13.715-16.149 16.939-26.018h-38.625c-0.28201 0.28162-0.56894 0.55531-0.86244 0.81785-5.1884 4.642-13.233 7.0276-19.842 5.9345-6.2208-1.029-13.164-5.1325-19.162-11.184h-2e-3c-1.1763-1.1869-2.331-2.472-3.4716-3.8321z"
                      transform="translate(20, 50), scale(0.8)"/>








                  </mask>
                </defs>




                <!--SVG rectangle to clip-->


                <rect
                  id="home-button__rectangle-background"
                  class="home-button__background-masked"
                  x="0"
                  y="0"
                  width="400px"
                  height="250px"
                  fill="rgba(54, 54, 54, 0.85)"
                  transform="translate(0,-35)"/>


                <!--SVG inner loop for highlight hover effect-->

                <path
                  id="home-button__inner-loop"
                  d="m95.18 15.103c-14.197 0.0194-27.903 5.3468-38.534 14.859-12.9 11.541-19.965 27.997-19.965 45.039 7e-5 17.042 7.0653 33.497 19.965 45.038 12.961 11.596 30.489 16.976 47.906 14.095h2e-3c3.9073-0.64624 7.6236-1.6678 11.15-2.9873v-0.0427c10.5-3.965 19.311-10.558 26.461-17.763 9.4098-9.4828 16.016-19.876 22.024-29.146 3.9743-6.1331 7.7373-11.833 11.61-16.782 1.9605-2.5583 3.9498-4.9268 6.0038-6.9995h2e-3c5.9976-6.0519 12.941-10.156 19.162-11.185 1.6522-0.27307 3.3937-0.32978 5.1585-0.18723 5.2944 0.4274 10.792 2.64 14.684 6.1216 3.7419 3.3479 6.5665 8.2882 7.8811 13.498h-34.376v12.68h68.678c0.21714-2.0986 0.32745-4.2145 0.32745-6.3396 0-17.042-7.063-33.497-19.963-45.039-12.96-11.596-30.491-16.976-47.908-14.095-5.1251 0.84776-9.9197 2.3443-14.39 4.3093v0.0513c-9.0851 4.0227-16.821 9.9793-23.222 16.43-9.4098 9.4827-16.017 19.878-22.024 29.148-3.9748 6.1339-7.7379 11.833-11.611 16.784-1.9604 2.5573-3.9498 4.9255-6.0033 6.9977-5.9976 6.0519-12.941 10.155-19.162 11.184-6.6088 1.093-14.656-1.2925-19.844-5.9346-5.2495-4.6967-8.6968-12.526-8.6968-19.838-4e-5 -7.3113 3.4473-15.142 8.6968-19.838 3.8913-3.4816 9.3914-5.6943 14.686-6.1217 1.7648-0.14256 3.5063-0.0862 5.1585 0.18722 6.2207 1.0289 13.164 5.133 19.162 11.185 1.1767 1.1874 2.332 2.4726 3.4733 3.8333 1.1348-1.7045 2.2984-3.4822 3.4992-5.3353 4.5003-6.9446 9.5658-14.962 16.291-23.051-9.4531-9.3263-21.741-17.484-36.906-19.992h-2e-3c-2.1771-0.36008-4.3555-0.59077-6.5271-0.69674-0.95007-0.047-1.8984-0.0691-2.8448-0.068zm83.151 70.653c-1.1356 1.7044-2.2981 3.4783-3.5003 5.3334-4.5004 6.9449-9.5659 14.962-16.291 23.051 9.4534 9.3267 21.743 17.484 36.909 19.993 17.418 2.8809 34.948-2.4987 47.909-14.095 7.9748-7.1351 13.715-16.149 16.939-26.018h-38.625c-0.28201 0.28162-0.56894 0.55531-0.86244 0.81785-5.1884 4.642-13.233 7.0276-19.842 5.9345-6.2208-1.029-13.164-5.1325-19.162-11.184h-2e-3c-1.1763-1.1869-2.331-2.472-3.4716-3.8321z"
                  transform="translate(20, 15), scale(0.8)"/>


              </svg>
            </nuxt-link>
            <div class="navigation__logo-mobile">
              <nuxt-link to="/">
                <img
                  alt="Colton Eakins logo of initials"
                  src="~/assets/logo.png">
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
          class="tile is-parent is-5 spacer">
          <div class="tile is-child"><p>.</p></div>
        </div>
        <div class="tile is-parent is-5 navi-menu navigation__menu">
          <div class="tile is-child">
            <nuxt-link to="/">

              <svg
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:ev="http://www.w3.org/2001/xml-events"

                class="nav-button">

                <defs>
                  <mask id="nav-button__mask1">
                    <rect
                      width="200"
                      height="100"
                      fill="#fff" />


                    <text
                      x="50%"
                      y="55%"
                      fill="#000"
                      text-anchor="middle"
                    >Home</text>


                  </mask>
                </defs>



                <!--SVG rectangle to clip-->
                <rect
                  id="nav-button__rectangle-background"
                  class="nav-button__background-masked1"
                  x="0"
                  y="0"
                  width="200"
                  height="100"
                  fill="rgba(54, 54, 54, 0.85)"/>

                <text
                  id="nav-button_highlight-text"
                  x="50%"
                  y="55%"
                  fill="#000"
                  text-anchor="middle"
                >Home</text>

              </svg>

            </nuxt-link>
          </div>
          <div class="tile is-child">
            <nuxt-link to="/portfolio">

              <svg

                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:ev="http://www.w3.org/2001/xml-events"

                class="nav-button">

                <defs>
                  <mask id="nav-button__mask2">
                    <rect
                      width="200"
                      height="100"
                      fill="#fff" />

                    <text
                      x="50%"
                      y="55%"
                      fill="#000"
                      text-anchor="middle"
                    >Portfolio</text>


                  </mask>
                </defs>



                <!--SVG rectangle to clip-->
                <rect
                  id="nav-button__rectangle-background"
                  class="nav-button__background-masked2"
                  x="0"
                  y="0"
                  width="200"
                  height="100"
                  fill="rgba(54, 54, 54, 0.85)"/>

                <text
                  id="nav-button_highlight-text"
                  x="50%"
                  y="55%"
                  fill="#000"
                  text-anchor="middle"
                >Portfolio</text>

              </svg>

            </nuxt-link>
          </div>
          <div class="tile is-child">
            <nuxt-link to="/blog">

              <svg

                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:ev="http://www.w3.org/2001/xml-events"

                class="nav-button">

                <defs>
                  <mask id="nav-button__mask3">
                    <rect
                      width="200"
                      height="100"
                      fill="#fff" />

                    <text
                      x="50%"
                      y="55%"
                      fill="#000"
                      text-anchor="middle"
                    >Blog</text>


                  </mask>
                </defs>



                <!--SVG rectangle to clip-->
                <rect
                  id="nav-button__rectangle-background"
                  class="nav-button__background-masked3"
                  x="0"
                  y="0"
                  width="200"
                  height="100"
                  fill="rgba(54, 54, 54, 0.85)"/>

                <text
                  id="nav-button_highlight-text"
                  x="50%"
                  y="55%"
                  fill="#000"
                  text-anchor="middle"
                >Blog</text>

              </svg>

            </nuxt-link>
          </div>
          <div class="tile is-child">
            <nuxt-link to="/contact">
              <svg

                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:ev="http://www.w3.org/2001/xml-events"

                class="nav-button">

                <defs>
                  <mask id="nav-button__mask4">
                    <rect
                      width="200"
                      height="100"
                      fill="#fff" />

                    <text
                      x="50%"
                      y="55%"
                      fill="#000"
                      text-anchor="middle"
                    >Contact</text>


                  </mask>
                </defs>



                <!--SVG rectangle to clip-->
                <rect
                  id="nav-button__rectangle-background"
                  class="nav-button__background-masked4"
                  x="0"
                  y="0"
                  width="200"
                  height="100"
                  fill="rgba(54, 54, 54, 0.85)"/>

                <text
                  id="nav-button_highlight-text"
                  x="50%"
                  y="55%"
                  fill="#000"
                  text-anchor="middle"
                >Contact</text>

              </svg>

            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-menu navigation__ie-backup-nav">
      <div class="navbar-start">
        <div class="navbar-brand">
          <div class="navbar-item">
            <div class="navigation__ie-logo">
              <nuxt-link
                title="Colton Eakins"
                to="/">
                <img
                  alt="Colton Eakins logo of initials"
                  src="~/assets/logo.png">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-end">
        <nuxt-link
          class="navbar-item"
          to="/">Home</nuxt-link>
        <nuxt-link
          class="navbar-item"
          to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link
          class="navbar-item"
          to="/blog">Blog</nuxt-link>
        <nuxt-link
          class="navbar-item"
          to="/contact">Contact</nuxt-link>
      </div>
    </div>

  </nav>
</template>


<style>


.navbar-burger span {
    height: 2px;
}

.navi-fixed {
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
    background-color: transparent;
}

.home-button__background-masked {
    mask: url("#home-button__mask");
}

#home-button__inner-loop {
    fill: transparent;
    transition: fill 0.25s ease-in-out;
}

.home-button:hover #home-button__inner-loop {
    fill: #fff;
}

.nav-button__background-masked1 {
    mask: url("#nav-button__mask1");
}

.nav-button__background-masked2 {
    mask: url("#nav-button__mask2");
}

.nav-button__background-masked3 {
    mask: url("#nav-button__mask3");
}

.nav-button__background-masked4 {
    mask: url("#nav-button__mask4");
}

.nav-button {
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    width: 100%;
    height: 100%;
}

#nav-button_highlight-text {
    fill: transparent;
    transition: fill 0.25s ease-in-out;
}

.nav-button:hover #nav-button_highlight-text {
    fill: #fff;
}

.navbar-item {
    margin: 0;
    padding: 0;
}

.tile.is-parent {
    padding: 0;
}

.home-button {
    width: 100%;
    height: 100%;
}

.nav-button {
    width: 100%;
    height: 100%;
}

.navi-fixed .container {
    min-height: inherit;
    width: 100%;
}

.navi-fixed .tile {
    height: 70px;
}

.navi-tile-ancestor {
    justify-content: center;
}

.spacer {
    background-color: #363636;
    background-color: rgba(54, 54, 54, 0.85);
}

@media screen and (max-width: 1024px) {
    .spacer {
        width: 16.66666% !important;
    }
}

@media screen and (max-width: 960px) {
    .spacer {
        width: 8.33333% !important;
    }
}

@media screen and (max-width: 775px) {
    .navi-menu, .spacer {
        display: none;
    }
}

.navigation__ie-backup-nav {
    display: none;
}

.navigation__logo-mobile {
    max-width: 175px;
}

@media screen and (min-width: 776px) {
    .navigation__logo-mobile {
        display: none;
    }
}

@media screen and (max-width: 776px) {
    .navigation__logo-primary {
        display: none;
    }
    .navi-fixed {
        position: relative !important;
        top: 0;
    }
    #panel {
        padding: 15px !important;
    }
    .navi-fixed .tile {
        height: inherit;
    }
}

.navigation__ie-backup-nav {
    max-width: 1100px;
    margin: 0 auto;
}

.navigation__ie-logo img {
    width: 200px;
    height: auto;
    max-height: inherit;
}

.navigation__ie-backup-nav .navbar-item {
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
}

.navigation__ie-backup-nav .navbar-start {
    justify-content: center;
}

.navigation__ie-backup-nav .navbar-end {
    justify-content: center;
}

.navigation__ie-backup-nav {
    background-color: transparent;
    box-shadow: none;
}

@media screen and (max-width: 775px) {
    .navigation__ie-backup-nav .navbar-end {
        display: none;
    }
}



/*
Browser Specific CSS Hacks
https://stackoverflow.com/questions/20541306/how-to-write-a-css-hack-for-ie-11
*/

/*
Edge (which is moving to Chromium soon anyway...)
https://stackoverflow.com/questions/32201586/how-to-identify-microsoft-edge-browser-via-css
https://browserstrangeness.github.io/css_hacks.html
*/
@supports (-ms-ime-align:auto) {
    .navi-menu .tile {
        margin-left: -0.25px !important;
        margin-right: -0.25px !important;
    }
}

/*
Firefox Only
*/
@supports (-moz-appearance:none) {
  .spacer {
      margin-left: -0.25px;
      margin-right: -0.25px;
  }
  .navi-menu .tile {
    margin-left: -0.25px !important;
    margin-right: -0.25px !important;
  }
}

/*
IE Backup Menu CSS
IE 9-11
*/
@media screen and (min-width:0\0) and (min-resolution:+72dpi) {
  .navigation__ie-backup-nav {
    display: block;
  }
  .navigation__primary {
    display: none !important;
  }
  .navi-fixed {
      position: relative !important;
      top: inherit;
  }
  #panel {
      padding: 10px !important;
  }
}


</style>
