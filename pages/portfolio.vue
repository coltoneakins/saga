<template>
  <section>
    <h2>This is where I will put my portfolio. It will feature:</h2>
    <ul>
      <li>p5.js, three.js, and other interactive animations</li>
      <li>Vaporware products and landing pages for lead conversion</li>
      <li>Live code samples</li>
      <li>SVG animations</li>
      <li>Python projects</li>
      <li>Isotope.js sortable grid of projects</li>
      <li>Seam carving, AI watermark removal, and other algorithms related to images</li>
      <li>Blog posts with D3.js</li>
      <li>Jupyter notebooks</li>
      <li>Literate programming samples</li>
    </ul>
  </section>
</template>

<script>
export default {
    scrollToTop: true,
    head () {
        return {
            title: 'Colton Eakins // Modern Front-End Developer // Portfolio',
            meta: [
                { hid: 'description', name: 'description', content: 'Portfolio consists of projects with HTML, CSS, JS and Python. Projects range from website spiders to interaction design.' }
            ]
        }
    },
    transition: 'slide'
}
</script>
