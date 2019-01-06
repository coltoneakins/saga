<template>
  <section class="contact-form">
    <h1>Contact Me</h1>
    <h2>Feel free to contact me via <a href="https://www.linkedin.com/in/coltoneakins/">LinkedIn</a> as well.</h2>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfLbEBSLLey_A5Dgt24lxc6R2HMtRIAyE3AKA2r3mAI6Ay5FQ/viewform?embedded=true"
      width="640"
      height="790"
      frameborder="0"
      marginheight="0"
      marginwidth="0">Loading...</iframe>
  </section>
</template>

<script>
export default {
    scrollToTop: true,
    head () {
        return {
            title: 'Colton Eakins // Modern Front-End Developer // Contact',
            meta: [
                { hid: 'description', name: 'description', content: 'Contact Colton Eakins for web development.' }
        ]
      }
    },
    transition: 'fade'
}
</script>
