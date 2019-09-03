<template>
  <section class="hero is-fullheight">
    <div class="home-hero">
      <div class="container">
        <h1 class="title">
          Colton Eakins
        </h1>
        <h2 class="subtitle">
          Interactive Web Developer
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
            title: 'Colton Eakins // Modern Web Developer // Home',
            meta: [
                { hid: 'description', name: 'description', content: 'Colton Eakins. Interactive front-end developer. Colton writes blog posts that dive deep into web development.' }
            ]
        }
    },
    transition: {
        appear: true,
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

          var clock = new THREE.Clock();

          var scene = new THREE.Scene();

          var camera = new THREE.PerspectiveCamera(50, container.offsetWidth/container.offsetHeight, 1, 1800);
          //TODO Fix camera aspect ratio

          //var controls = new THREE.OrbitControls(camera);
          camera.position.set(125, 600, 900);
	        camera.lookAt(scene.position);
          //controls.update();


		      var renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
          renderer.setSize(container.offsetWidth, container.offsetHeight);
	        container.appendChild(renderer.domElement);


          var textureLoader = new THREE.TextureLoader();
          var cubeGeometry = new THREE.BoxGeometry(150, 150, 150);
          var jsLogoTexture = textureLoader.load(jsCubeImage);
          jsLogoTexture.flipY = false;
          var jsSpecMapTexture = textureLoader.load(jsCubeSpecMap);
          jsSpecMapTexture.flipY = false;
          var jsLogoMaterial = new THREE.MeshToonMaterial({map: jsLogoTexture});
          jsLogoMaterial.specularMap = jsSpecMapTexture;
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


          var pythonLogoTexture = textureLoader.load(pythonCubeImage);
          pythonLogoTexture.flipY = false;
          var pythonSpecMapTexture = textureLoader.load(pythonCubeSpecMap);
          pythonSpecMapTexture.flipY = false;
          var pythonLogoMaterial = new THREE.MeshToonMaterial({map: pythonLogoTexture});
          pythonLogoMaterial.specularMap = pythonSpecMapTexture;
          var pythonColorMaterial = new THREE.MeshToonMaterial({color: 0x3776AB});
          var pythonMaterials = [
            pythonColorMaterial,
            pythonColorMaterial,
            pythonColorMaterial,
            pythonColorMaterial,
            pythonLogoMaterial,
            pythonLogoMaterial
          ];
          var pythonMesh = new THREE.Mesh(cubeGeometry, pythonMaterials);
          scene.add(pythonMesh);


          var sassLogoTexture = textureLoader.load(sassCubeImage);
          sassLogoTexture.flipY = false;
          var sassSpecMapTexture = textureLoader.load(sassCubeSpecMap);
          pythonSpecMapTexture.flipY = false;
          var sassLogoMaterial = new THREE.MeshToonMaterial({map: sassLogoTexture});
          sassLogoMaterial.specularMap = sassSpecMapTexture;
          var sassColorMaterial = new THREE.MeshToonMaterial({color: 0xFFFFFF});
          var sassMaterials = [
            sassColorMaterial,
            sassColorMaterial,
            sassColorMaterial,
            sassColorMaterial,
            sassLogoMaterial,
            sassLogoMaterial
          ];
          var sassMesh = new THREE.Mesh(cubeGeometry, sassMaterials);
          scene.add(sassMesh);


	        //var light = new THREE.SpotLight(0xffffff, 1);
          var light = new THREE.HemisphereLight( 0xFFFFFF, 0x080820, 1 );
	        light.position.set(125, 700, 900);
	        scene.add(light);


          function position(t) {
	          // x(t) = cos(2t)*(3+cos(3t))
	          // y(t) = sin(2t)*(3+cos(3t))
	          // z(t) = sin(3t)
	          return new THREE.Vector3(
			        160.0 * Math.cos(2.0 * t) * (3.0 + Math.cos(3.0 * t)),
			        160.0 * Math.sin(2.0 * t) * (3.0 + Math.cos(3.0 * t)),
			        400.0 * Math.sin(3.0 * t) );
          }


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
            var t0 = clock.getElapsedTime();
	          var jsTime = 0.05 * t0;
            var pythonTime = 120 + jsTime;
            var sassTime = 30 + jsTime;

            jsMesh.position.x = position(jsTime).x
            jsMesh.position.y = position(jsTime).y
            jsMesh.position.z = position(jsTime).z
            jsMesh.rotation.x += 0.005
            jsMesh.rotation.y += 0.005
            jsMesh.rotation.z += 0.005

            pythonMesh.position.x = position(pythonTime).x
            pythonMesh.position.y = position(pythonTime).y
            pythonMesh.position.z = position(pythonTime).z
            pythonMesh.rotation.x += 0.005
            pythonMesh.rotation.y -= 0.005
            pythonMesh.rotation.z -= 0.005

            sassMesh.position.x = position(sassTime).x
            sassMesh.position.y = position(sassTime).y
            sassMesh.position.z = position(sassTime).z
            sassMesh.rotation.x -= 0.005
            sassMesh.rotation.y += 0.005
            sassMesh.rotation.z -= 0.005



            //controls.update();
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
.home-hero .title {
  font-size: 58px;
  font-weight: bold;
}
</style>
