<template>
  <aside class="social-media">
    <SocialMediaSVG/>
    <div class="tile is-ancestor">
      <div class="tile is-1 is-vertical is-parent">
        <div class="tile is-child">
          <a
            title="GitHub"
            target="_blank"
            href="https://github.com/coltoneakins">
            <svg
              role="img"
              title="GitHub"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events">
              <use xlink:href="#github"/>
            </svg>
          </a>
        </div>
        <div class="tile is-child">
          <a
            title="Stack Overflow"
            target="_blank"
            href="https://stackoverflow.com/users/9347694/coltoneakins">
            <svg
              role="img"
              title="Stack Overflow"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events">
              <use xlink:href="#stackoverflow"/>
            </svg>
          </a>
        </div>
        <div class="tile is-child">
          <a
            title="LinkedIn"
            target="_blank"
            href="https://www.linkedin.com/in/coltoneakins/">
            <svg
              role="img"
              title="LinkedIn"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events">
              <use xlink:href="#linkedin"/>
            </svg>
          </a>
        </div>
        <div class="tile is-child">
          <a
            title="CodePen"
            target="_blank"
            href="https://codepen.io/coltoneakins/">
            <svg
              role="img"
              title="CodePen"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events">
              <use xlink:href="#codepen"/>
            </svg>
          </a>
        </div>
        <div class="tile is-child">
          <a
            title="Repl.it"
            target="_blank"
            href="https://repl.it/@coltoneakins">
            <svg
              role="img"
              title="Repl.it"
              version="1.1"
              baseProfile="full"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:ev="http://www.w3.org/2001/xml-events">
              <use xlink:href="#replit"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import SocialMediaSVG from '~/assets/socialmedia.svg?inline'

export default {
    components: {
      SocialMediaSVG
    }
}
</script>


<style>
.social-media {
    position: fixed;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    z-index: 5;
}
.social-media > svg {
    display: none;
}
.social-media .tile {
    margin: 0 !important;
    min-height: 60px; /*For issues with IE flexbox*/
}
.tile.is-vertical > .tile.is-child {
    margin-bottom: 0 !important;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
    margin-bottom: 0 !important;
}
.social-media svg {
    width: 60px;
    height: 60px;
    fill: #363636;
    fill: rgba(54, 54, 54, 0.85);
    transition: opacity 0.25s ease-in-out;
}
.social-media svg:hover {
    opacity: 0.5;
}
@media screen and (max-width: 768px) {
    .social-media .tile {
        display: inline;
        width: 40px;
        height: 40px;
        min-height: inherit;
        padding-left: 10px;
    }

    .social-media > svg{
       display: none;
    }
    .social-media svg {
        width: 40px;
    }

    .social-media {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        top: inherit;
        text-align: center;
    }
}
</style>
