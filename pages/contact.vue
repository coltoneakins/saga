<template>
  <section class="contact section">
    <div class="container">
      <h1 class="title">Let's talk.</h1>
      <h2 class="subtitle">New projects, freelance inquries, or questions.</h2>


      <form
        class="form box"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field">

        <div class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" ></label>
        </div>


        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name">
          </div>
        </div>


        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="hello@nicetomeet.you">
          </div>
        </div>


        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Hi Colton,"/>
          </div>
        </div>

        <div data-netlify-recaptcha="true"/>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>

      </form>

      <div class="notification has-text-centered">
        All responses are directly emailed to me. Your email is never sold. Your email is only used for the explicit purpose of contacting you back.
      </div>

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
.hidden {
  display: none;
}
.notification {
    opacity: 0.5;
}
</style>
