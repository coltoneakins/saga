<template>
  <section class="contact section">
    <div class="container">
      <h1 class="title">Let's talk.</h1>
      <h2 class="subtitle">New projects, freelance inquries, or questions.</h2>


      <form
        class="form box"
        name="contact"
        method="POST"
        action="/contact/success">

        <!-- See: static/dummyform.html -->
        <input
          type="hidden"
          name="form-name"
          value="contact" >

        <div class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" ></label>
        </div>


        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="name"
              placeholder="Name">
          </div>
        </div>


        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              name="email"
              placeholder="hello@nicetomeet.you">
          </div>
        </div>


        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              name="message"
              placeholder="Hi Colton,"/>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              type="submit"
              formaction="/contact/success">Submit</button>
          </div>
        </div>

      </form>

      <div class="notification has-text-centered">
        All responses are directly emailed to me. Your email is never sold. Your email is used only for the explicit purpose of contacting you back.
      </div>

      <nuxt-child/>

    </div>
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

<style>
@media screen and (min-width: 767px) {
  .contact {
    padding-top: 150px;
  }
}
.contact .hidden {
  display: none;
}
</style>
