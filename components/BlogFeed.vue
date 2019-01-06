<template>
  <article class="blog-feed">
    <h2 class="subtitle is-4">Blog Feed</h2>

    <article class="blog-feed__tags">
      <h2 class="subtitle is-5">Select a tag below:</h2>
      <ul class="tags">
        <nuxt-link
          v-for="tag in categories"
          :key="tag.id"
          :to="'/blog/category/' + tag.text">
          <li
            class="tag">{{ tag.text }}</li>
        </nuxt-link>
      </ul>
    </article>

    <article class="blog-feed__posts">
      <div
        v-for="post in posts"
        :key="post.id"
        class="box">
        <article>
          <div class="blog-feed__post-thumbnail">
            <img
              :alt="post.altText"
              :src="webpackImageToStaticPath(post.thumbnail)">
          </div>
          <div class="blog-feed__post-content">
            <div class="title is-5">{{ post.title }}</div>
            <div class="subtitle is-6">{{ post.description }}</div>
            <div class="subtitle is-6">By {{ post.author }} \\ Published {{ post.published }}</div>
          </div>
          <div class="blog-feed__post-tags">
            <ul class="tags">
              <li
                v-for="tag in post.categories"
                :key="tag.id"
                class="tag">{{ tag.text }}</li>
            </ul>
          </div>
        </article>
      </div>
    </article>

  </article>
</template>

<script>
export default {
    data: function() {
      return {
        categories: [
            {id: 0, text: 'html'},
            {id: 1, text: 'css'},
            {id: 2, text: 'js'},
            {id: 3, text: 'python'},
            {id: 4, text: 'emacs'},
            {id: 5, text: 'web-scraping'},
            {id: 6, text: 'vue'}
        ],
        posts: [
          //{id: 0, title: '', slug: '', description: '', author: '', published: '', thumbnail: '', altText: '', path: '', categories: [{}]},
          {id: 0, title: 'Post 1', slug: 'post1', description: 'Description of Post 1', author: 'Colton Eakins', published: 'Jan. 2, 2019', thumbnail: 'python.png', altText: 'Python logo', path: '/blog/post/post1', categories: [{id: 0, text: 'python'}]},
          {id: 1, title: 'Post 2', slug: 'post2', description: 'Description of Post 2', author: 'Colton Eakins', published: 'Jan. 3, 2019', thumbnail: 'sass.jpg', altText: 'Sass logo', path: '/blog/post/post2', categories: [{id: 0, text: 'html'}, {id: 1, text:'css'}]},
          {id: 2, title: 'Post 3', slug: 'post3', description: 'Description of Post 3', author: 'Colton Eakins', published: 'Jan. 4, 2019', thumbnail: 'js.jpg', altText: 'JavaScript logo', path: '/blog/post/post3', categories: [{id: 0, text: 'js'}, {id: 1, text:'vue'}]},
        ]
      }
    },
    methods: {
      webpackImageToStaticPath(thumbnail) {
        // https://github.com/vuejs-templates/webpack/issues/126
        return require('~/assets/thumbnails/' + thumbnail);
      }
    }
}
</script>

<style>
.blog-feed__tags .tags > a {
  margin-right: 10px;
}
.blog-feed__tags .tag {
  background-color: #363636;
  color: #fff;
}
.blog-feed__tags .nuxt-link-exact-active .tag {
  background-color: #23D160;
}
.blog-feed__post-tags .tags {
  text-align: right;
}
</style>
