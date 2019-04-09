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
          class="button is-medium is-dark is-outlined">
          Portfolio</nuxt-link>
        <nuxt-link
          to="/contact"
          class="button is-medium is-dark is-outlined">
          Contact</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import * as THREE from 'three-full'
import {OrbitControls} from 'three-full'
import {OutlineEffect} from 'three-full'
import jsCubeImage from '~/static/threejs/textures/cubemaps/jsCube/jsLogo.png'
import jsCubeSpecMap from '~/static/threejs/textures/cubemaps/jsCube/jsLogoSpecMap.png'
import pythonCubeImage from '~/static/threejs/textures/cubemaps/pythonCube/pythonLogo.png'
import pythonCubeSpecMap from '~/static/threejs/textures/cubemaps/pythonCube/pythonLogoSpecMap.png'
import sassCubeImage from '~/static/threejs/textures/cubemaps/sassCube/sassCubeLogo.png'
import sassCubeSpecMap from '~/static/threejs/textures/cubemaps/sassCube/sassCubeLogoSpecMap.png'


export default {
    scrollToTop: true,
    head () {
        return {
            title: 'Colton Eakins // Modern Front-End Developer // Home',
            meta: [
                { hid: 'description', name: 'description', content: 'Colton Eakins. Interactive front-end developer. Colton writes blog posts that dive deep into web development.' }
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

          var container = document.getElementsByClassName('hero')[0];

          var scene = new THREE.Scene();

          var camera = new THREE.PerspectiveCamera(75, container.offsetWidth/container.offsetHeight, 1, 1000);

          var controls = new THREE.OrbitControls(camera);
          camera.position.set(600, 500, 75);
	        camera.lookAt(scene.position);
          controls.update();


		      var renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
          renderer.setSize(container.offsetWidth, container.offsetHeight);
	        container.appendChild(renderer.domElement);


          var textureLoader = new THREE.TextureLoader();
          var cubeGeometry = new THREE.BoxGeometry(150, 150, 150);
          var jsLogoTexture = textureLoader.load(jsCubeImage);
          var jsLogoMaterial = new THREE.MeshToonMaterial({map: jsLogoTexture});
          var jsColorMaterial = new THREE.MeshToonMaterial({color: 0xF0DB4F});
          var jsMaterials = [
            jsColorMaterial,
            jsColorMaterial,
            jsColorMaterial,
            jsColorMaterial,
            jsLogoMaterial,
            jsLogoMaterial
          ];
          var jsMesh = new THREE.Mesh(cubeGeometry, jsMaterials);
          scene.add(jsMesh);


	        var light = new THREE.PointLight(0xffffff);
	        light.position.set(100,250,100);
	        scene.add(light);

          function onWindowResize() {
            camera.aspect = container.offsetWidth/container.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
          }

          function animate() {
            requestAnimationFrame( animate );
            render();
          }

          function render() {
            //camera.position.z = Math.sin( timer ) * 800;
            controls.update();
            renderer.render(scene, camera);
          }

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
