<template>
  <section class="home-hero container has-text-centered">
    <h2>This site is under active construction as of 1/11/2019. Check back soon for something wicked cool!</h2>
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
  //mounted: function() {
    //this.$nextTick(function() {
      //this.init();
    //})
  //},
  //methods: {
    //init: function() {
	    //var scene = new THREE.Scene();
			//var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//
			//var renderer = new THREE.WebGLRenderer();
			//renderer.setSize( window.innerWidth, window.innerHeight );
			//document.body.appendChild( renderer.domElement );
//
			//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			//var cube = new THREE.Mesh( geometry, material );
			//scene.add( cube );
//
			//camera.position.z = 5;
//
			//var animate = function () {
				//requestAnimationFrame( animate );
//
				//cube.rotation.x += 0.01;
				//cube.rotation.y += 0.01;
//
				//renderer.render( scene, camera );
			//};
//
			//animate();
    //}
  //}
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
}
</style>
