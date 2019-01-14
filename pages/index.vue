<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Colton Eakins
        </h1>
        <h2 class="subtitle">
          Interactive Front-End Developer
        </h2>
        <nuxt-link
          to="/portfolio"
          class="button is-dark is-outlined">
          Portfolio</nuxt-link>
        <nuxt-link
          to="/contact"
          class="button is-dark is-outlined">
          Contact</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three'

export default {
  scrollToTop: true,
  head () {
    return {
      title: 'Colton Eakins // Modern Front-End Developer // Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Colton Eakins. Interactive front-end developer. Colton writes blog posts the dive deep into web development.' }
      ]
    }
  },
  transition: {
    name: 'fade'
  },
  mounted: function() {
    this.$nextTick(function() {
      this.init();
    })
  },
  methods: {
    init: function() {
	    var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 1000 );

      var container = document.getElementsByClassName('hero')[0];

      var renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setSize( container.offsetWidth, container.offsetHeight);
			container.appendChild( renderer.domElement );

      var geometry = new THREE.CubeGeometry( 250, 250, 250 );
      var material = new THREE.MeshBasicMaterial( { color: 0xababab, wireframe: true, wireframeLinewidth: 7 } );
      var mesh = new THREE.Mesh( geometry, material );

			scene.add( mesh );

			camera.position.z = 600;

			var animate = function () {
				requestAnimationFrame( animate );

				mesh.rotation.x += 0.001;
				mesh.rotation.y += 0.001;

				renderer.render( scene, camera );
			};

			animate();
    }
  }
}
</script>

<style>
.home-hero {
  height: calc(100vh - 30px);
  display: flex;
  align-items: center;
  justify-content: center;
}
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
</style>
